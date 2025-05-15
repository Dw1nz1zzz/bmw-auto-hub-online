
import React from "react";
import ServiceCard from "./ServiceCard";
import EmptyServicesList from "./EmptyServicesList";

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ElementType;
}

interface ServicesListProps {
  services: Service[];
}

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  if (services.length === 0) {
    return <EmptyServicesList />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          price={service.price}
          duration={service.duration}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default ServicesList;
