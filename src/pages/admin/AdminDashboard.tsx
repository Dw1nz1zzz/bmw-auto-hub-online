
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // Тестовые данные для дашборда
  const dashboardData = {
    newAppointments: 12,
    completedServices: 28,
    totalClients: 145,
    totalRevenue: "1 250 000 ₽",
  };

  // Тестовые данные для последних записей
  const recentAppointments = [
    {
      id: 1,
      client: "Иванов Иван",
      car: "BMW X5",
      service: "ТО",
      date: "25.05.2024",
      time: "10:00",
      status: "В ожидании",
    },
    {
      id: 2,
      client: "Петров Петр",
      car: "BMW 3 серии",
      service: "Ремонт подвески",
      date: "25.05.2024",
      time: "12:30",
      status: "Подтверждено",
    },
    {
      id: 3,
      client: "Сидоров Алексей",
      car: "BMW X3",
      service: "Диагностика",
      date: "26.05.2024",
      time: "09:15",
      status: "В ожидании",
    },
    {
      id: 4,
      client: "Смирнова Ольга",
      car: "BMW 5 серии",
      service: "Замена масла",
      date: "26.05.2024",
      time: "15:45",
      status: "Подтверждено",
    },
  ];

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Панель администратора</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Новые записи
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.newAppointments}</div>
            <p className="text-xs text-muted-foreground">
              +4 с прошлой недели
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Выполненные работы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.completedServices}</div>
            <p className="text-xs text-muted-foreground">
              +8 с прошлой недели
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Клиенты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalClients}</div>
            <p className="text-xs text-muted-foreground">
              +12 с прошлого месяца
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Общая выручка
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalRevenue}</div>
            <p className="text-xs text-muted-foreground">
              +15% с прошлого месяца
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Appointments */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Последние записи</h2>
          <Button asChild variant="outline">
            <Link to="/admin/appointments">Все записи</Link>
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Клиент
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Автомобиль
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Услуга
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дата и время
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Статус
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{appointment.client}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{appointment.car}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{appointment.service}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">
                        {appointment.date} {appointment.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === "Подтверждено" 
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/admin/appointments/${appointment.id}`}>
                          Детали
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Быстрые действия</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild className="bg-bmw-blue hover:bg-blue-700">
            <Link to="/admin/appointments/new">Создать запись</Link>
          </Button>
          <Button asChild>
            <Link to="/admin/services">Управление услугами</Link>
          </Button>
          <Button asChild>
            <Link to="/admin/clients">Список клиентов</Link>
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
