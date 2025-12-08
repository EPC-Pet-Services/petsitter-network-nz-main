export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      members: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          image: string
          location: string
          experience: string
          specialties: string[]
          rating: number
          available: boolean
          emergency_contact: boolean
          phone?: string
          bio?: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          image: string
          location: string
          experience: string
          specialties: string[]
          rating?: number
          available?: boolean
          emergency_contact?: boolean
          phone?: string
          bio?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          image?: string
          location?: string
          experience?: string
          specialties?: string[]
          rating?: number
          available?: boolean
          emergency_contact?: boolean
          phone?: string
          bio?: string
        }
      }
      emergency_alerts: {
        Row: {
          id: string
          created_at: string
          pet_name: string
          pet_type: string
          location: string
          urgency: 'low' | 'medium' | 'high'
          description: string
          compensation: string
          contact_name: string
          contact_email: string
          contact_phone?: string
          status: 'active' | 'fulfilled' | 'cancelled'
          member_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          pet_name: string
          pet_type: string
          location: string
          urgency: 'low' | 'medium' | 'high'
          description: string
          compensation: string
          contact_name: string
          contact_email: string
          contact_phone?: string
          status?: 'active' | 'fulfilled' | 'cancelled'
          member_id: string
        }
        Update: {
          id?: string
          created_at?: string
          pet_name?: string
          pet_type?: string
          location?: string
          urgency?: 'low' | 'medium' | 'high'
          description?: string
          compensation?: string
          contact_name?: string
          contact_email?: string
          contact_phone?: string
          status?: 'active' | 'fulfilled' | 'cancelled'
          member_id?: string
        }
      }
      pricing_plans: {
        Row: {
          id: string
          created_at: string
          title: string
          price: number
          period: string
          features: string[]
          popular: boolean
          stripe_price_id?: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          price: number
          period: string
          features: string[]
          popular?: boolean
          stripe_price_id?: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          price?: number
          period?: string
          features?: string[]
          popular?: boolean
          stripe_price_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      urgency_level: 'low' | 'medium' | 'high'
      alert_status: 'active' | 'fulfilled' | 'cancelled'
    }
  }
}
