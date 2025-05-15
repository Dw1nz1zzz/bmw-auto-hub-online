import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  CarFront, 
  Settings, 
  Wrench, 
  Cpu, 
  Droplet, 
  Search,
  Battery,
  MousePointer,
  Clock,
  Car,  // Replaced Engine with Car
  Filter,
  Fuel, // Replaced Oil with Fuel
  Heater,
  Plug,
  Gauge,
  CircleDot, // Replaced Tire with CircleDot
  HardDrive,
  Cog, // Replaced Gear with Cog
  Key
} from "lucide-react";

// Категории услуг
const categories = [
  { id: "all", name: "Все услуги" },
  { id: "engine", name: "Двигатель" },
  { id: "transmission", name: "Трансмиссия" },
  { id: "chassis", name: "Ходовая часть" },
  { id: "brakes", name: "Тормозная система" },
  { id: "electronics", name: "Электроника" },
  { id: "other", name: "Прочее" },
];

// Данные услуг
const services = [
  {
    id: 1,
    title: "Техническое обслуживание двигателя",
    category: "engine",
    description: "Полное ТО двигателя по регламенту производителя",
    price: "1 000 ₽",
    duration: "1-2 часа",
    icon: Car,  // Changed from Engine to Car
  },
  {
    id: 2,
    title: "Замена топливного фильтра",
    category: "engine",
    description: "Замена топливного фильтра с диагностикой топливной системы",
    price: "500 ₽",
    duration: "30 мин",
    icon: Filter,
  },
  {
    id: 3,
    title: "Замена масла в редукторах",
    category: "transmission",
    description: "Замена масла в редукторах с промывкой",
    price: "от 500 ₽",
    duration: "1 час",
    icon: Fuel,  // Changed from Oil to Fuel
  },
  {
    id: 4,
    title: "Замена масла в раздатке",
    category: "transmission",
    description: "Замена масла в раздаточной коробке с диагностикой",
    price: "1 000 ₽",
    duration: "1 час",
    icon: Fuel,  // Changed from Oil to Fuel
  },
  {
    id: 5,
    title: "Замена масла в АКПП",
    category: "transmission",
    description: "Полная замена масла в автоматической коробке передач",
    price: "3 000 ₽",
    duration: "2-3 часа",
    icon: Cog,  // Changed from Gear to Cog
  },
  {
    id: 6,
    title: "Замена антифриза",
    category: "engine",
    description: "Полная замена охлаждающей жидкости с промывкой системы",
    price: "2 000 ₽",
    duration: "1-2 часа",
    icon: Droplet,
  },
  {
    id: 7,
    title: "Замена тормозной жидкости",
    category: "brakes",
    description: "Полная замена тормозной жидкости с прокачкой системы",
    price: "от 2 500 ₽",
    duration: "1-2 часа",
    icon: Droplet,
  },
  {
    id: 8,
    title: "Компьютерная диагностика",
    category: "electronics",
    description: "Полная диагностика всех электронных систем автомобиля",
    price: "от 1 000 ₽",
    duration: "1 час",
    icon: Cpu,
  },
  {
    id: 9,
    title: "Замена рычагов",
    category: "chassis",
    description: "Замена рычагов подвески с последующей регулировкой",
    price: "от 1 500 ₽",
    duration: "2-4 часа",
    icon: Wrench,
  },
  {
    id: 10,
    title: "Замена амортизационных стоек",
    category: "chassis",
    description: "Замена амортизаторов с последующей диагностикой",
    price: "от 2 000 ₽",
    duration: "2-4 часа",
    icon: CarFront,
  },
  {
    id: 11,
    title: "Замена сайлентблоков",
    category: "chassis",
    description: "Замена сайлентблоков подвески",
    price: "от 1 500 ₽",
    duration: "2-4 часа",
    icon: Wrench,
  },
  {
    id: 12,
    title: "Развал схождение",
    category: "chassis",
    description: "Регулировка углов установки колес",
    price: "2 500 ₽",
    duration: "1 час",
    icon: Gauge,
  },
  {
    id: 13,
    title: "Замена тормозных колодок",
    category: "brakes",
    description: "Замена тормозных колодок передней или задней оси",
    price: "от 1 500 ₽ за ось",
    duration: "1-2 часа",
    icon: Wrench,
  },
  {
    id: 14,
    title: "Переборка суппортов",
    category: "brakes",
    description: "Полная разборка, чистка и сборка тормозных суппортов",
    price: "1 500 ₽",
    duration: "2-3 часа",
    icon: Wrench,
  },
  {
    id: 15,
    title: "Раскоксовка двигателя",
    category: "engine",
    description: "Очистка двигателя от нагара и отложений",
    price: "2 500 ₽",
    duration: "2-3 часа",
    icon: Car,
  },
  {
    id: 16,
    title: "Чистка впускного коллектора на дизелях",
    category: "engine",
    description: "Профессиональная очистка впускного коллектора дизельных двигателей",
    price: "15 000 ₽",
    duration: "4-6 часов",
    icon: Car,
  },
  {
    id: 17,
    title: "Мойка и чистка радиаторов охлаждения",
    category: "engine",
    description: "Профессиональная мойка и чистка системы охлаждения",
    price: "от 5 000 ₽",
    duration: "2-4 часа",
    icon: Heater,
  },
  {
    id: 18,
    title: "Эндоскопия двигателя",
    category: "engine",
    description: "Визуальная диагностика внутренних частей двигателя с помощью эндоскопа",
    price: "от 2 000 ₽",
    duration: "1-2 часа",
    icon: Cpu,
  },
  {
    id: 19,
    title: "Мойка двигателя",
    category: "engine",
    description: "Профессиональная мойка моторного отсека",
    price: "от 1 500 ₽",
    duration: "1 час",
    icon: Droplet,
  },
  {
    id: 20,
    title: "Замена ГРМ на BMW",
    category: "engine",
    description: "Замена ремня или цепи ГРМ с сопутствующими элементами",
    price: "от 30 000 ₽",
    duration: "6-10 часов",
    icon: Settings,
  },
  {
    id: 21,
    title: "Замена мотора",
    category: "engine",
    description: "Замена двигателя с последующей диагностикой",
    price: "от 35 000 ₽",
    duration: "1-2 дня",
    icon: Car,
  },
  {
    id: 22,
    title: "Замена АКПП",
    category: "transmission",
    description: "Замена автоматической коробки передач",
    price: "15 000 ₽",
    duration: "6-8 часов",
    icon: Cog,  // Changed from Gear to Cog
  },
  {
    id: 23,
    title: "Замена заднего редуктора",
    category: "transmission",
    description: "Замена заднего дифференциала",
    price: "6 000 ₽",
    duration: "3-5 часов",
    icon: Cog,  // Changed from Gear to Cog
  },
  {
    id: 24,
    title: "Чип тюнинг",
    category: "electronics",
    description: "Модификация электронного блока управления двигателя и АКПП",
    price: "от 25 000 ₽",
    duration: "2-3 часа",
    icon: HardDrive,
  },
  {
    id: 25,
    title: "Русификация автомобильной мультимедии",
    category: "electronics",
    description: "Перевод интерфейса мультимедийной системы на русский язык",
    price: "от 65 000 ₽",
    duration: "4-8 часов",
    icon: MousePointer,
  },
  {
    id: 26,
    title: "Ремонт системы кондиционирования",
    category: "other",
    description: "Диагностика и устранение неисправностей в системе кондиционирования",
    price: "от 6 000 ₽",
    duration: "2-5 часов",
    icon: Plug,
  },
  {
    id: 27,
    title: "Шиномонтаж",
    category: "other",
    description: "Замена и балансировка колес",
    price: "от 500 ₽",
    duration: "30-60 мин",
    icon: CircleDot,  // Changed from Tire to CircleDot
  },
  {
    id: 28,
    title: "Проверка компрессии двигателя",
    category: "engine",
    description: "Проверка компрессии и герметичности цилиндро-поршневой группы",
    price: "от 3 500 ₽",
    duration: "1-2 часа",
    icon: Gauge,
  },
  {
    id: 29,
    title: "Ремонт головки блока цилиндров",
    category: "engine",
    description: "Разборка, диагностика и ремонт ГБЦ",
    price: "от 35 000 ₽",
    duration: "1-3 дня",
    icon: Wrench,
  },
  {
    id: 30,
    title: "Проверка прорыва газов",
    category: "engine",
    description: "Проверка прорыва газов в рубашку охлаждения двигателя",
    price: "2 500 ₽",
    duration: "1 час",
    icon: Gauge,
  },
  {
    id: 31,
    title: "Проверка ГРМ",
    category: "engine",
    description: "Диагностика состояния и настройки газораспределительного механизма",
    price: "от 1 500 ₽",
    duration: "1-2 часа",
    icon: Settings,
  },
  {
    id: 32,
    title: "Замена подушек двигателя",
    category: "engine",
    description: "Замена опор двигателя",
    price: "от 2 000 ₽",
    duration: "2-4 часа",
    icon: Car,
  },
  {
    id: 33,
    title: "Замена насоса ОЖ",
    category: "engine",
    description: "Замена помпы системы охлаждения двигателя",
    price: "от 6 000 ₽",
    duration: "3-6 часов",
    icon: Droplet,
  },
  {
    id: 34,
    title: "Замена стартера",
    category: "electronics",
    description: "Демонтаж и установка нового стартера",
    price: "от 2 500 ₽",
    duration: "1-3 часа",
    icon: Battery,
  },
  {
    id: 35,
    title: "Замена генератора",
    category: "electronics",
    description: "Демонтаж и установка нового генератора",
    price: "от 2 500 ₽",
    duration: "1-3 часа",
    icon: Battery,
  },
  {
    id: 36,
    title: "Замена уплотнения клапанной крышки",
    category: "engine",
    description: "Замена прокладки клапанной крышки",
    price: "от 4 000 ₽",
    duration: "1-3 часа",
    icon: Wrench,
  },
  {
    id: 37,
    title: "Замена сальников клапанов",
    category: "engine",
    description: "Замена маслосъемных колпачков",
    price: "от 15 000 ₽",
    duration: "5-10 часов",
    icon: Wrench,
  },
  {
    id: 38,
    title: "Замена маслянного насоса",
    category: "engine",
    description: "Замена насоса системы смазки двигателя",
    price: "от 15 000 ₽",
    duration: "5-10 часов",
    icon: Fuel,  // Changed from Oil to Fuel
  },
  {
    id: 39,
    title: "Замена подшипников ступицы",
    category: "chassis",
    description: "Замена подшипников передней или задней ступицы",
    price: "от 2 500 ₽",
    duration: "2-3 часа",
    icon: CarFront,
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
                    <p className="text-gray-600 mb-4 min-h-[3rem]">
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
