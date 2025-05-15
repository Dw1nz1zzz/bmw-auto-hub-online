
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ServiceCategory {
  id: string;
  name: string;
}

interface ServiceFiltersProps {
  categories: ServiceCategory[];
  activeCategory: string;
  setActiveCategory: (categoryId: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ServiceFilters: React.FC<ServiceFiltersProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="flex flex-col md:flex-row mb-8">
      {/* Categories for desktop */}
      <div className="hidden md:flex flex-wrap gap-2 mb-6 md:mb-0">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={activeCategory === category.id ? "bg-bmw-blue" : ""}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Categories for mobile (dropdown) */}
      <div className="md:hidden mb-6">
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Search */}
      <div className="md:ml-auto flex w-full md:w-auto">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Поиск услуг..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceFilters;
