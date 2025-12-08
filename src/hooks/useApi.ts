import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/database.types';

type Member = Database['public']['Tables']['members']['Row'];
type EmergencyAlert = Database['public']['Tables']['emergency_alerts']['Row'];
type PricingPlan = Database['public']['Tables']['pricing_plans']['Row'];

// Members API
export const useMembers = () => {
  return useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Member[];
    },
  });
};

export const useMember = (id: string) => {
  return useQuery({
    queryKey: ['member', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data as Member;
    },
    enabled: !!id,
  });
};

export const useUpdateMemberAvailability = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, available }: { id: string; available: boolean }) => {
      const { data, error } = await (supabase.from('members') as any)
        .update({ available })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
    },
  });
};

// Emergency Alerts API
export const useEmergencyAlerts = () => {
  return useQuery({
    queryKey: ['emergency-alerts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('emergency_alerts')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as EmergencyAlert[];
    },
  });
};

export const useCreateEmergencyAlert = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (alert: Database['public']['Tables']['emergency_alerts']['Insert']) => {
      const { data, error } = await (supabase.from('emergency_alerts') as any)
        .insert(alert)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emergency-alerts'] });
    },
  });
};

export const useUpdateAlertStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ 
      id, 
      status 
    }: { 
      id: string; 
      status: 'active' | 'fulfilled' | 'cancelled' 
    }) => {
      const { data, error } = await (supabase.from('emergency_alerts') as any)
        .update({ status })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['emergency-alerts'] });
    },
  });
};

// Pricing Plans API
export const usePricingPlans = () => {
  return useQuery({
    queryKey: ['pricing-plans'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pricing_plans')
        .select('*')
        .order('price', { ascending: true });
      
      if (error) throw error;
      return data as PricingPlan[];
    },
  });
};

// Mock data fallback when Supabase is not configured
export const getMockMembers = (): Member[] => [
  {
    id: '1',
    created_at: new Date().toISOString(),
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    image: 'https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586410031_ed2456af.webp',
    location: 'Auckland Central',
    experience: '5+ years',
    specialties: ['Dogs', 'Cats'],
    rating: 5,
    available: true,
    emergency_contact: true,
  },
  {
    id: '2',
    created_at: new Date().toISOString(),
    name: 'Mike Chen',
    email: 'mike@example.com',
    image: 'https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586411749_23c1e95c.webp',
    location: 'North Shore',
    experience: '3+ years',
    specialties: ['Dogs', 'Birds'],
    rating: 4,
    available: false,
    emergency_contact: true,
  },
];

export const getMockEmergencyAlerts = (): EmergencyAlert[] => [
  {
    id: '1',
    created_at: new Date().toISOString(),
    pet_name: 'Buddy',
    pet_type: 'Golden Retriever',
    location: 'Auckland Central',
    urgency: 'high' as const,
    description: 'My regular sitter had a family emergency. Buddy needs walking and feeding tonight and tomorrow morning.',
    compensation: '$80/day',
    contact_name: 'Sarah M.',
    contact_email: 'sarah@example.com',
    status: 'active' as const,
    member_id: '1',
  },
];

export const getMockPricingPlans = (): PricingPlan[] => [
  {
    id: '1',
    created_at: new Date().toISOString(),
    title: 'Basic',
    price: 15,
    period: 'month',
    features: ['Access to member directory', 'Emergency alert notifications', 'Basic profile listing', 'Community forum access'],
    popular: false,
  },
  {
    id: '2',
    created_at: new Date().toISOString(),
    title: 'Professional',
    price: 25,
    period: 'month',
    features: ['Everything in Basic', 'Priority emergency alerts', 'Enhanced profile with photos', 'Client referral system', '24/7 support hotline'],
    popular: true,
  },
];
