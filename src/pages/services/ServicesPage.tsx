
import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  CarFront, 
  Settings, 
  Tool, 
  Cpu, 
  Droplet, 
  Search,
  Battery,
  MousePointer,
  Clock
} from "lucide-react";

// Категории услуг
const categories = [
  { id: "all", name: "Все услуги" },
  { id: "diagnostics", name: "Диагностика" },
  { id: "maintenance", name: "Техническое обслуживание" },
  { id: "repair", name: "Ремонт" },
  { id: "electronics", name: "Электрика и электроника" },
];

// Данные услуг
const services = [
  {
    id: 1,
    title: "Компьютерная диагностика",
    category: "diagnostics",
    description: "Полная диагностика всех электронных систем автомобиля",
    price: "3 000 ₽",
    duration: "1 час",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Техническое обслуживание",
    category: "maintenance",
    description: "Регламентное ТО согласно рекомендациям производителя",
    price: "от 15 000 ₽",
    duration: "3-5 часов",
    icon: Settings,
  },
  {
    id: 3,
    title: "Замена масла и фильтров",
    category: "maintenance",
    description: "Замена моторного масла и всех необходимых фильтров",
    price: "от 8 000 ₽",
    duration: "1 час",
    icon: Droplet,
  },
  {
    id: 4,
    title: "Ремонт двигателя",
    category: "repair",
    description: "Диагностика и устранение неисправностей двигателя",
    price: "от 20 000 ₽",
    duration: "от 5 часов",
    icon: Tool,
  },
  {
    id: 5,
    title: "Ремонт ходовой части",
    category: "repair",
    description: "Замена амортизаторов, пружин, рычагов и других элементов подвески",
    price: "от 12 000 ₽",
    duration: "3-8 часов",
    icon: CarFront,
  },
  {
    id: 6,
    title: "Ремонт электрики",
    category: "electronics",
    description: "Устранение неисправностей в электрической системе",
    price: "от 5 000 ₽",
    duration: "1-4 часа",
    icon: Battery,
  },
  {
    id: 7,
    title: "Ремонт электроники",
    category: "electronics",
    description: "Диагностика и ремонт электронных блоков управления",
    price: "от 10 000 ₽",
    duration: "2-6 часов",
    icon: MousePointer,
  },
];

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
      {/* Hero Section */}
      <section className="bg-gray-900 py-16">
        <div className="bmw-container text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Услуги сервиса</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Полный спектр услуг по диагностике, обслуживанию и ремонту автомобилей BMW
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="bmw-container">
          <div className="flex flex-col md:flex-row mb-8">
            {/* Категории для десктопа */}
            <div className="hidden md:flex space-x-4 mb-6 md:mb-0">
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
            
            {/* Категории для мобильных (выпадающий список) */}
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
            
            {/* Поиск */}
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

          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Услуги не найдены. Пожалуйста, попробуйте другой запрос.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-bmw-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-bmw-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 h-12">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                      <span className="text-lg font-semibold text-bmw-blue">
                        {service.price}
                      </span>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-bmw-blue hover:bg-blue-700"
                    >
                      <Link to={`/booking/${service.id}`}>Записаться</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
    </Layout>
  );
};

export default ServicesPage;
