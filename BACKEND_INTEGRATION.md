# Backend Integration Guide

## Overview
This application uses **Supabase** as the backend, providing PostgreSQL database, authentication, and real-time subscriptions. The frontend is integrated using **TanStack Query** for efficient data fetching and caching.

## Architecture

```
Frontend (React + TypeScript)
  ↓
TanStack Query (Data Layer)
  ↓
Custom Hooks (src/hooks/useApi.ts)
  ↓
Supabase Client (src/lib/supabase.ts)
  ↓
Supabase Backend (PostgreSQL + REST API)
```

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Wait for the project to be provisioned (~2 minutes)
4. Go to **Project Settings** → **API**
5. Copy your **Project URL** and **anon public** key

### 2. Configure Environment Variables

Update the `.env` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
VITE_STRIPE_PRICE_BASIC=price_1234567890basic
VITE_STRIPE_PRICE_PROFESSIONAL=price_1234567890professional
VITE_STRIPE_PRICE_PREMIUM=price_1234567890premium

# Stripe API URL (your backend endpoint)
VITE_STRIPE_API_URL=http://localhost:3000/api/stripe
```

### 3. Set Up Database Schema

1. In your Supabase project, go to **SQL Editor**
2. Create a new query
3. Copy and paste the contents of `supabase-schema.sql`
4. Run the query to create tables, indexes, and sample data

### 4. Verify Setup

1. Go to **Table Editor** in Supabase
2. You should see three tables:
   - `members` - Pet sitter profiles
   - `emergency_alerts` - Emergency backup requests
   - `pricing_plans` - Membership tiers
3. Each table should have sample data

### 5. Run the Application

```bash
npm run dev
```

The app will now fetch data from your Supabase backend!

## Data Flow

### Fetching Data

The app uses custom hooks from `src/hooks/useApi.ts`:

```tsx
import { useMembers, useEmergencyAlerts, usePricingPlans } from '@/hooks/useApi';

function MyComponent() {
  const { data: members, isLoading, error } = useMembers();
  
  // Data is automatically cached and revalidated by TanStack Query
  return (
    <div>
      {isLoading ? 'Loading...' : members.map(m => <MemberCard {...m} />)}
    </div>
  );
}
```

### Updating Data

Use mutation hooks for write operations:

```tsx
import { useUpdateMemberAvailability } from '@/hooks/useApi';

function ToggleAvailability({ memberId, currentStatus }) {
  const mutation = useUpdateMemberAvailability();
  
  const toggle = () => {
    mutation.mutate({ 
      id: memberId, 
      available: !currentStatus 
    });
  };
  
  return <button onClick={toggle}>Toggle Availability</button>;
}
```

### Fallback Mode

If Supabase is not configured, the app automatically falls back to mock data:

```tsx
// In src/hooks/useApi.ts
const members = membersData && membersData.length > 0 
  ? membersData 
  : getMockMembers(); // ← Fallback to hardcoded data
```

## API Hooks Reference

### Members

- `useMembers()` - Fetch all members
- `useMember(id)` - Fetch single member by ID
- `useUpdateMemberAvailability()` - Update availability status

### Emergency Alerts

- `useEmergencyAlerts()` - Fetch active emergency requests
- `useCreateEmergencyAlert()` - Create new emergency request
- `useUpdateAlertStatus()` - Update alert status (active/fulfilled/cancelled)

### Pricing

- `usePricingPlans()` - Fetch all pricing plans

### Stripe Subscriptions

- `useCreateCheckoutSession()` - Create Stripe checkout session for subscriptions
- `useCreatePortalSession()` - Open Stripe customer portal for subscription management
- `useSubscriptionStatus()` - Get current user's subscription details

## Database Schema

### `members` Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | Member's full name |
| email | TEXT | Email (unique) |
| image | TEXT | Profile image URL |
| location | TEXT | City/suburb |
| experience | TEXT | Years of experience |
| specialties | TEXT[] | Array of pet types |
| rating | INTEGER | 1-5 star rating |
| available | BOOLEAN | Currently available |
| emergency_contact | BOOLEAN | Available for emergencies |

### `emergency_alerts` Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| pet_name | TEXT | Pet's name |
| pet_type | TEXT | Type of pet |
| location | TEXT | Where help is needed |
| urgency | ENUM | low/medium/high |
| description | TEXT | Detailed description |
| compensation | TEXT | Payment offered |
| status | ENUM | active/fulfilled/cancelled |
| member_id | UUID | Foreign key to members |

### `pricing_plans` Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| title | TEXT | Plan name |
| price | DECIMAL | Monthly price |
| period | TEXT | Billing period |
| features | TEXT[] | Array of features |
| popular | BOOLEAN | Highlighted plan |

### `subscriptions` Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| user_id | UUID | Foreign key to auth.users |
| stripe_customer_id | TEXT | Stripe customer ID |
| stripe_subscription_id | TEXT | Stripe subscription ID |
| plan_title | TEXT | Subscribed plan name |
| price | DECIMAL | Monthly price |
| period | TEXT | Billing period |
| status | TEXT | Subscription status |
| current_period_start | TIMESTAMP | Billing period start |
| current_period_end | TIMESTAMP | Billing period end |
| cancel_at_period_end | BOOLEAN | Will cancel at end |
| canceled_at | TIMESTAMP | Cancellation date |

## Security

### Row Level Security (RLS)

All tables have RLS enabled with these policies:

- **Public read access** - Anyone can view active data
- **Authenticated write** - Only logged-in users can create/update
- **Own data only** - Users can only modify their own records
- **Subscription privacy** - Users can only view their own subscription

### API Keys

- The **anon key** is safe to expose in the frontend
- It works with RLS policies to restrict access
- Never commit `.env` files to version control
- Stripe secret keys must stay on the backend only

## Stripe Integration

### Setup Process

1. **Install Dependencies** (already done):
   ```bash
   npm install @stripe/stripe-js @stripe/react-stripe-js stripe
   ```

2. **Create Stripe Products** in Stripe Dashboard:
   - Basic - $29/month
   - Professional - $49/month
   - Premium - $79/month

3. **Configure Environment Variables**:
   - Add Stripe publishable key to `.env`
   - Add price IDs for each plan
   - Set up backend API URL

4. **Deploy Backend API**:
   - See `STRIPE_SETUP.md` for backend deployment guide
   - Configure webhooks for subscription events

5. **Add Subscriptions Table**:
   - Run the subscriptions table SQL from `supabase-schema.sql`

### Using Stripe in Components

Stripe integration is already implemented in:
- `src/lib/stripe.ts` - Stripe configuration
- `src/hooks/useStripe.ts` - Custom hooks for checkout and portal
- `src/components/PricingCard.tsx` - Subscribe button integration
- `src/components/SubscriptionStatus.tsx` - Subscription management UI

## Advanced Features

### Real-time Subscriptions

Add real-time updates for emergency alerts:

```tsx
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

function useRealtimeAlerts() {
  const queryClient = useQueryClient();
  
  useEffect(() => {
    const channel = supabase
      .channel('emergency-alerts')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'emergency_alerts' },
        () => {
          queryClient.invalidateQueries({ queryKey: ['emergency-alerts'] });
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
}
```

### Authentication

Add Supabase Auth for member login:

```tsx
import { supabase } from '@/lib/supabase';

// Sign up
await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
});

// Sign in
await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'secure-password'
});

// Get current user
const { data: { user } } = await supabase.auth.getUser();
```

## Troubleshooting

### "Failed to fetch" errors

- Check that Supabase URL and key are correct in `.env`
- Verify RLS policies allow public read access
- Check browser console for CORS errors

### Empty data arrays

- Verify tables have data (check Table Editor in Supabase)
- Check RLS policies aren't blocking queries
- Review network tab for API responses

### Type errors

- Regenerate types: `npx supabase gen types typescript --project-id your-project-id > src/lib/database.types.ts`
- Ensure table schema matches type definitions

### Stripe checkout fails

- Verify price IDs are correct in `.env`
- Check backend API is running and accessible
- Review browser console for authentication errors
- Ensure user is logged in before checkout

## Next Steps

1. **Add Authentication** - Implement user signup/login with Supabase Auth
2. **Real-time Updates** - Subscribe to database changes for live updates
3. **File Upload** - Use Supabase Storage for profile images
4. **Email Notifications** - Trigger emails on new emergencies using Supabase Functions
5. **Complete Stripe Setup** - Deploy backend API and configure webhooks
6. **Payment Testing** - Test subscription flow with Stripe test cards
7. **Go Live** - Switch to live Stripe keys and deploy to production

## Resources

- [Supabase Docs](https://supabase.com/docs)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [React + Supabase Tutorial](https://supabase.com/docs/guides/getting-started/tutorials/with-react)
- [Stripe Subscriptions Guide](https://stripe.com/docs/billing/subscriptions/overview)
- [Stripe Testing](https://stripe.com/docs/testing)
