
import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "./components/HeroSection";
import ServiceFilters from "./components/ServiceFilters";
import ServicesList from "./components/ServicesList";
import CTASection from "./components/CTASection";
import { categories, services } from "./data/servicesData";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) => {
    const matchCategory = activeCategory === "all" || service.category === activeCategory;
    const matchSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <Layout>
      <HeroSection />

      <section className="py-12">
        <div className="bmw-container">
          <ServiceFilters
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          
          <ServicesList services={filteredServices} />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicesPage;
