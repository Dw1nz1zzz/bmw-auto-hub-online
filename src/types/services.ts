
import { Database } from "@/integrations/supabase/types";

export type ServiceCategory = Database['public']['Tables']['categories']['Row'];
export type Service = Database['public']['Tables']['services']['Row'];

// Type for a service with an icon component - create a new interface instead of extending
export interface ServiceWithIcon {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  created_at: string;
  updated_at: string;
  icon: React.ElementType;
}

// Map of icon names to icon components
export const iconMap: Record<string, React.ElementType> = {};
