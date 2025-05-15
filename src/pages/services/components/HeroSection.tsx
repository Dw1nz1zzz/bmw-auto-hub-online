
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="bmw-container text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Услуги сервиса</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Полный спектр услуг по диагностике, обслуживанию и ремонту автомобилей BMW
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
