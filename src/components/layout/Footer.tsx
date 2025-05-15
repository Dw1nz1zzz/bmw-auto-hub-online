
import React from "react";
import { Link } from "react-router-dom";
import BmwLogo from "../icons/BmwLogo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bmw-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BmwLogo className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold text-white">СТО BMW</span>
            </div>
            <p className="text-gray-400">
              Профессиональное обслуживание автомобилей BMW с гарантией качества.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/diagnostics" className="text-gray-400 hover:text-white transition-colors">
                  Диагностика
                </Link>
              </li>
              <li>
                <Link to="/services/repair" className="text-gray-400 hover:text-white transition-colors">
                  Ремонт
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="text-gray-400 hover:text-white transition-colors">
                  Техническое обслуживание
                </Link>
              </li>
              <li>
                <Link to="/services/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Электроника
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/prices" className="text-gray-400 hover:text-white transition-colors">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>г. Москва, ул. Автосервисная, 123</li>
              <li>+7 (999) 123-45-67</li>
              <li>info@bmwservice.ru</li>
              <li>Пн-Пт: 9:00 - 20:00</li>
              <li>Сб-Вс: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} СТО BMW. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
