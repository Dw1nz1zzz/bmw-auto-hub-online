
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="bmw-container text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Не нашли нужную услугу?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами, и мы проконсультируем вас по всем вопросам обслуживания вашего BMW
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            asChild
            className="bg-bmw-blue hover:bg-blue-700"
          >
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
