
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  CarFront, 
  Clock, 
  Settings,
  Calendar
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Диагностика",
    description: "Комплексная проверка всех систем автомобиля",
    icon: CarFront,
    price: "от 3 000 ₽",
  },
  {
    id: 2,
    title: "Техническое обслуживание",
    description: "Регулярное ТО согласно регламенту BMW",
    icon: Settings,
    price: "от 10 000 ₽",
  },
  {
    id: 3,
    title: "Срочный ремонт",
    description: "Быстрое устранение поломок любой сложности",
    icon: Clock,
    price: "от 5 000 ₽",
  },
];

const advantagesData = [
  {
    title: "Оригинальные запчасти",
    description: "Используем только оригинальные запчасти и расходные материалы",
  },
  {
    title: "Опытные мастера",
    description: "Специалисты с сертификацией BMW и опытом работы от 5 лет",
  },
  {
    title: "Современное оборудование",
    description: "Диагностическое и ремонтное оборудование последнего поколения",
  },
  {
    title: "Гарантия на работы",
    description: "Предоставляем гарантию на все выполненные работы до 2 лет",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-bmw-black/80 to-bmw-black/60 z-10" />
        <div
          className="h-[600px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="bmw-container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Профессиональный сервис для вашего BMW
              </h1>
              <p className="text-xl text-white mb-8">
                Доверьте свой автомобиль специалистам с многолетним опытом
                обслуживания и ремонта BMW
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  asChild
                  className="bg-bmw-blue hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  <Link to="/services">Записаться на сервис</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-bmw-black px-8 py-3 text-lg"
                >
                  <Link to="/services">Наши услуги</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 bg-white">
        <div className="bmw-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Популярные услуги
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Выберите необходимую услугу или запишитесь на комплексную диагностику
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-bmw-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-bmw-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-bmw-blue">
                      {service.price}
                    </span>
                    <Button
                      asChild
                      variant="outline"
                      className="border-bmw-blue text-bmw-blue hover:bg-bmw-blue hover:text-white"
                    >
                      <Link to={`/services/${service.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-bmw-blue hover:bg-blue-700 text-white px-8 py-2"
            >
              <Link to="/services">Все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="py-16 bg-gray-100">
        <div className="bmw-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Как записаться на сервис
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Всего несколько шагов до профессионального обслуживания вашего BMW
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-bmw-blue text-white rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Выберите услугу</h3>
              <p className="text-gray-600">
                Выберите необходимую услугу из каталога или запишитесь на диагностику
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-bmw-blue text-white rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Выберите дату</h3>
              <p className="text-gray-600">
                Выберите удобную дату и время для посещения нашего сервиса
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="w-12 h-12 bg-bmw-blue text-white rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Приезжайте на сервис</h3>
              <p className="text-gray-600">
                Приезжайте в назначенное время, а мы уже будем готовы вас встретить
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-bmw-blue hover:bg-blue-700 text-white px-8 py-2"
            >
              <Link to="/services">
                <Calendar className="w-5 h-5 mr-2 inline-block" />
                Записаться сейчас
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="bmw-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Мы предлагаем лучший сервис для вашего BMW
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantagesData.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-bmw-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bmw-blue py-16">
        <div className="bmw-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы доверить свой BMW профессионалам?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Запишитесь на диагностику или обслуживание прямо сейчас и получите скидку 10% на первое посещение
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              asChild
              className="bg-white text-bmw-blue hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <Link to="/services">Записаться</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-bmw-blue px-8 py-3 text-lg"
            >
              <Link to="/contacts">Контакты</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
