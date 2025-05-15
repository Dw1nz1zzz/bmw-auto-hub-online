
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  HomeIcon, 
  Settings, 
  Users, 
  Calendar, 
  CarFront, 
  FileText, 
  DollarSign,
  Menu, 
  X
} from "lucide-react";
import BmwLogo from "../icons/BmwLogo";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "/admin", icon: HomeIcon },
    { name: "Услуги", href: "/admin/services", icon: CarFront },
    { name: "Клиенты", href: "/admin/clients", icon: Users },
    { name: "Записи", href: "/admin/appointments", icon: Calendar },
    { name: "Бухгалтерия", href: "/admin/finance", icon: DollarSign },
    { name: "Отчеты", href: "/admin/reports", icon: FileText },
    { name: "Настройки", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`md:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-40 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} />

      {/* Mobile sidebar */}
      <div className={`fixed top-0 left-0 bottom-0 flex flex-col w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 md:transform-none md:relative md:flex ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <BmwLogo className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold text-bmw-black">СТО BMW</span>
          </Link>
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-bmw-blue text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Button
            variant="outline"
            className="w-full justify-start text-left"
            asChild
          >
            <Link to="/">
              <span>Вернуться на сайт</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            <div className="text-lg font-semibold text-gray-900">
              Административная панель
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-700">Администратор</span>
              <div className="h-8 w-8 rounded-full bg-bmw-blue text-white flex items-center justify-center">
                <span>A</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
