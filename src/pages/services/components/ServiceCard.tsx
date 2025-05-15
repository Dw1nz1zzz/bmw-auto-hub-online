
import React from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  price,
  duration,
  icon: Icon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="p-6">
        <div className="w-12 h-12 bg-bmw-blue/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-bmw-blue" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 min-h-[3rem]">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <span className="text-lg font-semibold text-bmw-blue">{price}</span>
        </div>
        <Button asChild className="w-full bg-bmw-blue hover:bg-blue-700">
          <Link to={`/booking/${id}`}>Записаться</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
