

-- Members table
CREATE TABLE IF NOT EXISTS members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  image TEXT NOT NULL,
  location TEXT NOT NULL,
  experience TEXT NOT NULL,
  specialties TEXT[] NOT NULL DEFAULT '{}',
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
  available BOOLEAN DEFAULT true,
  emergency_contact BOOLEAN DEFAULT false,
  phone TEXT,
  bio TEXT
);

-- Emergency alerts table
CREATE TABLE IF NOT EXISTS emergency_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  pet_name TEXT NOT NULL,
  pet_type TEXT NOT NULL,
  location TEXT NOT NULL,
  urgency urgency_level NOT NULL DEFAULT 'medium',
  description TEXT NOT NULL,
  compensation TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  status alert_status DEFAULT 'active',
  member_id UUID REFERENCES members(id) ON DELETE CASCADE
);

-- Pricing plans table
CREATE TABLE IF NOT EXISTS pricing_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  period TEXT NOT NULL DEFAULT 'month',
  features TEXT[] NOT NULL DEFAULT '{}',
  popular BOOLEAN DEFAULT false,
  stripe_price_id TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_members_available ON members(available);
CREATE INDEX IF NOT EXISTS idx_members_emergency_contact ON members(emergency_contact);
CREATE INDEX IF NOT EXISTS idx_emergency_alerts_status ON emergency_alerts(status);
CREATE INDEX IF NOT EXISTS idx_emergency_alerts_created_at ON emergency_alerts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pricing_plans_price ON pricing_plans(price);

-- Enable Row Level Security (RLS)
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE emergency_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON members
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON emergency_alerts
  FOR SELECT USING (status = 'active');

CREATE POLICY "Enable read access for all users" ON pricing_plans
  FOR SELECT USING (true);

-- Policies for authenticated users to insert/update their own data
-- (Adjust these based on your authentication setup)
CREATE POLICY "Enable insert for authenticated users" ON members
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for own data" ON members
  FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Enable insert for authenticated users" ON emergency_alerts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for own data" ON emergency_alerts
  FOR UPDATE USING (auth.uid()::text = member_id::text);

-- Insert sample data
INSERT INTO members (name, email, image, location, experience, specialties, rating, available, emergency_contact) VALUES
  ('Sarah Johnson', 'sarah@example.com', 'https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586410031_ed2456af.webp', 'Auckland Central', '5+ years', ARRAY['Dogs', 'Cats'], 5, true, true),
  ('Mike Chen', 'mike@example.com', 'https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586411749_23c1e95c.webp', 'North Shore', '3+ years', ARRAY['Dogs', 'Birds'], 4, false, true),
  ('Emma Wilson', 'emma@example.com', 'https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586413699_0eb39c35.webp', 'West Auckland', '7+ years', ARRAY['All Pets'], 5, true, false),
  ('David Smith', 'david@example.com', 'https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586415517_6e7d72fa.webp', 'South Auckland', '2+ years', ARRAY['Cats', 'Rabbits'], 4, true, true),
  ('Lisa Brown', 'lisa@example.com', 'https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586417230_c1edf691.webp', 'East Auckland', '4+ years', ARRAY['Dogs'], 5, false, false),
  ('Tom Anderson', 'tom@example.com', 'https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586418970_ff59f229.webp', 'Auckland Central', '6+ years', ARRAY['Exotic Pets'], 4, true, true);

INSERT INTO pricing_plans (title, price, period, features, popular) VALUES
  ('Basic', 15.00, 'month', ARRAY['Access to member directory', 'Emergency alert notifications', 'Basic profile listing', 'Community forum access'], false),
  ('Professional', 25.00, 'month', ARRAY['Everything in Basic', 'Priority emergency alerts', 'Enhanced profile with photos', 'Client referral system', '24/7 support hotline'], true),
  ('Premium', 40.00, 'month', ARRAY['Everything in Professional', 'Guaranteed emergency coverage', 'Insurance coverage', 'Marketing tools', 'Advanced analytics', 'Priority placement'], false);

-- Insert sample emergency alerts (using the first member's ID)
DO $$
DECLARE
  sample_member_id UUID;
BEGIN
  SELECT id INTO sample_member_id FROM members LIMIT 1;
  
  INSERT INTO emergency_alerts (pet_name, pet_type, location, urgency, description, compensation, contact_name, contact_email, status, member_id) VALUES
    ('Buddy', 'Golden Retriever', 'Auckland Central', 'high', 'My regular sitter had a family emergency. Buddy needs walking and feeding tonight and tomorrow morning.', '$80/day', 'Sarah M.', 'sarah@example.com', 'active', sample_member_id),
    ('Whiskers', 'Cat', 'North Shore', 'medium', 'Unexpected hospital visit. Need someone to check on Whiskers twice daily for 3 days.', '$50/day', 'John D.', 'john@example.com', 'active', sample_member_id);
END $$;
