
import { Database } from "@/integrations/supabase/types";

export type ServiceCategory = Database['public']['Tables']['categories']['Row'];
export type Service = Database['public']['Tables']['services']['Row'];

// Type for the icon component
export interface ServiceWithIcon extends Service {
  icon: React.ElementType;
}

// Map of icon names to icon components
export const iconMap: Record<string, React.ElementType> = {};
