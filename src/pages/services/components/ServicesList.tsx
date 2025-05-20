
import React from "react";
import ServiceCard from "./ServiceCard";
import EmptyServicesList from "./EmptyServicesList";
import { Service } from "@/types/services";
import { CarFront, Wrench, Cpu, ChevronRight, Filter, Fuel, Droplet, Cog } from "lucide-react";

// Map string icon names from database to actual React components
const iconMap: Record<string, React.ElementType> = {
  Car: CarFront,
  Wrench: Wrench,
  Cpu: Cpu,
  ChevronRight: ChevronRight,
  Filter: Filter,
  Fuel: Fuel,
  Droplet: Droplet,
  Cog: Cog,
  CarFront: CarFront
};

interface ServicesListProps {
  services: Service[];
  isLoading?: boolean;
}

const ServicesList: React.FC<ServicesListProps> = ({ services, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bmw-blue"></div>
      </div>
    );
  }

  if (services.length === 0) {
    return <EmptyServicesList />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        const IconComponent = iconMap[service.icon] || CarFront;
        
        return (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
            duration={service.duration}
            icon={IconComponent}
          />
        );
      })}
    </div>
  );
};

export default ServicesList;
