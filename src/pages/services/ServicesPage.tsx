
import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "./components/HeroSection";
import ServiceFilters from "./components/ServiceFilters";
import ServicesList from "./components/ServicesList";
import CTASection from "./components/CTASection";
import { supabase } from "@/integrations/supabase/client";
import { Service, ServiceCategory } from "@/types/services";
import { toast } from "@/components/ui/use-toast";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*")
          .order("name");
          
        if (error) {
          throw error;
        }

        if (data) {
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast({
          title: "Ошибка",
          description: "Не удалось загрузить категории услуг",
          variant: "destructive",
        });
      }
    }

    async function fetchServices() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("services")
          .select("*")
          .order("title");
          
        if (error) {
          throw error;
        }

        if (data) {
          setServices(data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        toast({
          title: "Ошибка",
          description: "Не удалось загрузить список услуг",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
    fetchServices();
  }, []);

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
          
          <ServicesList services={filteredServices} isLoading={isLoading} />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicesPage;
