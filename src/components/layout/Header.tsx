
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import BmwLogo from "../icons/BmwLogo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm relative z-10">
      <div className="bmw-container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BmwLogo className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold text-bmw-black">СТО BMW</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-bmw-blue transition-colors">
              Главная
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-bmw-blue transition-colors">
              Услуги
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-bmw-blue transition-colors">
              О нас
            </Link>
            <Link to="/contacts" className="font-medium text-gray-700 hover:text-bmw-blue transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/account" className="flex items-center space-x-1">
                <UserCircle className="h-5 w-5" />
                <span>Личный кабинет</span>
              </Link>
            </Button>
            <Button asChild className="bg-bmw-blue hover:bg-blue-700">
              <Link to="/services">Записаться</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-bmw-blue focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link
              to="/contacts"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Link
              to="/account"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Личный кабинет
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium bg-bmw-blue text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Записаться
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
