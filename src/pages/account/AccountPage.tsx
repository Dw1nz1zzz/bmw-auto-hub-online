
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Car, 
  Calendar, 
  Clock, 
  Settings,
  LogOut
} from "lucide-react";

const AccountPage = () => {
  // Тестовые данные пользователя
  const user = {
    name: "Иван Иванов",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
    registrationDate: "01.01.2023",
  };

  // Тестовые данные автомобиля
  const car = {
    model: "BMW X5",
    year: "2020",
    vin: "WBAKJ4C51BCK12345",
    regNumber: "А123БВ777",
  };

  // Тестовые данные истории обслуживания
  const serviceHistory = [
    {
      id: 1,
      date: "15.05.2023",
      service: "Техническое обслуживание",
      price: "15 000 ₽",
      status: "Выполнен",
    },
    {
      id: 2,
      date: "10.08.2023",
      service: "Замена тормозных колодок",
      price: "8 000 ₽",
      status: "Выполнен",
    },
    {
      id: 3,
      date: "22.12.2023",
      service: "Диагностика электроники",
      price: "3 000 ₽",
      status: "Выполнен",
    },
  ];

  // Тестовые данные предстоящих записей
  const appointments = [
    {
      id: 1,
      date: "25.05.2024",
      time: "14:30",
      service: "Техническое обслуживание",
      price: "15 000 ₽",
    },
  ];

  return (
    <Layout>
      <div className="py-10 bg-gray-50">
        <div className="bmw-container">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {/* Боковая панель */}
            <div className="w-full md:w-1/4">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-bmw-blue flex items-center justify-center text-white text-xl font-bold">
                    {user.name.split(" ").map(word => word[0]).join("")}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Link to="/account/profile" className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Профиль
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Link to="/account/vehicles" className="flex items-center">
                      <Car className="mr-2 h-5 w-5" />
                      Мои автомобили
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Link to="/account/appointments" className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Записи на сервис
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Link to="/account/history" className="flex items-center">
                      <Clock className="mr-2 h-5 w-5" />
                      История обслуживания
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Link to="/account/settings" className="flex items-center">
                      <Settings className="mr-2 h-5 w-5" />
                      Настройки
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Выйти
                  </Button>
                </div>
              </div>
            </div>

            {/* Основное содержимое */}
            <div className="w-full md:w-3/4">
              <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                  <TabsTrigger value="dashboard">Обзор</TabsTrigger>
                  <TabsTrigger value="vehicles">Автомобили</TabsTrigger>
                  <TabsTrigger value="appointments">Записи</TabsTrigger>
                  <TabsTrigger value="history">История</TabsTrigger>
                  <TabsTrigger value="settings">Настройки</TabsTrigger>
                </TabsList>
                
                <TabsContent value="dashboard">
                  <Card>
                    <CardHeader>
                      <CardTitle>Обзор аккаунта</CardTitle>
                      <CardDescription>
                        Добро пожаловать в личный кабинет, {user.name}!
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Информация об автомобиле</h3>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <p className="text-sm"><strong>Модель:</strong> {car.model}</p>
                            <p className="text-sm"><strong>Год выпуска:</strong> {car.year}</p>
                            <p className="text-sm"><strong>VIN:</strong> {car.vin}</p>
                            <p className="text-sm"><strong>Гос. номер:</strong> {car.regNumber}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Ближайшая запись</h3>
                          {appointments.length > 0 ? (
                            <div className="bg-blue-50 p-4 rounded-md">
                              <div className="flex justify-between mb-2">
                                <p className="font-medium">{appointments[0].service}</p>
                                <p className="text-bmw-blue font-semibold">{appointments[0].price}</p>
                              </div>
                              <div className="flex space-x-2 text-sm text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span>{appointments[0].date}</span>
                                <Clock className="h-4 w-4 ml-2" />
                                <span>{appointments[0].time}</span>
                              </div>
                            </div>
                          ) : (
                            <p className="text-gray-500">У вас нет предстоящих записей</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Последние обслуживания</h3>
                        <div className="space-y-4">
                          {serviceHistory.slice(0, 2).map((service) => (
                            <div key={service.id} className="bg-gray-50 p-4 rounded-md">
                              <div className="flex justify-between mb-2">
                                <p className="font-medium">{service.service}</p>
                                <p className="text-bmw-blue font-semibold">{service.price}</p>
                              </div>
                              <div className="flex justify-between text-sm">
                                <div className="flex space-x-2 text-gray-500">
                                  <Calendar className="h-4 w-4" />
                                  <span>{service.date}</span>
                                </div>
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs">
                                  {service.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button asChild variant="outline">
                        <Link to="/account/history">Вся история</Link>
                      </Button>
                      <Button asChild className="bg-bmw-blue hover:bg-blue-700">
                        <Link to="/services">Записаться на сервис</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="vehicles">
                  <Card>
                    <CardHeader>
                      <CardTitle>Мои автомобили</CardTitle>
                      <CardDescription>
                        Управление информацией о ваших автомобилях BMW
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{car.model}</h3>
                            <p className="text-gray-500">Год выпуска: {car.year}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-800">
                              Основной
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-gray-500">VIN</p>
                            <p className="font-medium">{car.vin}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Гос. номер</p>
                            <p className="font-medium">{car.regNumber}</p>
                          </div>
                        </div>
                        <div className="mt-6 flex space-x-4">
                          <Button variant="outline">Редактировать</Button>
                          <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                            Удалить
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button asChild className="bg-bmw-blue hover:bg-blue-700">
                          <Link to="/account/vehicles/add">Добавить автомобиль</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="appointments">
                  <Card>
                    <CardHeader>
                      <CardTitle>Записи на сервис</CardTitle>
                      <CardDescription>
                        Управление вашими записями на обслуживание
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {appointments.length > 0 ? (
                        <div className="space-y-4">
                          {appointments.map((appointment) => (
                            <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex flex-col md:flex-row justify-between mb-2">
                                <h3 className="font-semibold">{appointment.service}</h3>
                                <p className="text-bmw-blue font-semibold">{appointment.price}</p>
                              </div>
                              <div className="flex space-x-4 mb-4">
                                <div className="flex items-center text-gray-500">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span>{appointment.date}</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>{appointment.time}</span>
                                </div>
                              </div>
                              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                <Button variant="outline" className="text-yellow-600 border-yellow-600 hover:bg-yellow-50">
                                  Перенести
                                </Button>
                                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                                  Отменить
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500 mb-4">У вас нет предстоящих записей на сервис</p>
                          <Button asChild className="bg-bmw-blue hover:bg-blue-700">
                            <Link to="/services">Записаться на сервис</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="history">
                  <Card>
                    <CardHeader>
                      <CardTitle>История обслуживания</CardTitle>
                      <CardDescription>
                        Все выполненные работы по обслуживанию вашего автомобиля
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {serviceHistory.map((service) => (
                          <div key={service.id} className="border rounded-lg p-4">
                            <div className="flex flex-col md:flex-row justify-between mb-2">
                              <h3 className="font-semibold">{service.service}</h3>
                              <p className="text-bmw-blue font-semibold">{service.price}</p>
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{service.date}</span>
                              </div>
                              <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs">
                                {service.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Настройки аккаунта</CardTitle>
                      <CardDescription>
                        Управление личными данными и настройками аккаунта
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Личная информация</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Имя и фамилия</Label>
                              <Input id="name" defaultValue={user.name} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" defaultValue={user.email} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Телефон</Label>
                              <Input id="phone" defaultValue={user.phone} />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Изменить пароль</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="currentPassword">Текущий пароль</Label>
                              <Input id="currentPassword" type="password" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="newPassword">Новый пароль</Label>
                              <Input id="newPassword" type="password" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                              <Input id="confirmPassword" type="password" />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Настройки уведомлений</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Email-уведомления</p>
                                <p className="text-sm text-gray-500">Получать уведомления о записи на сервис</p>
                              </div>
                              <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">SMS-уведомления</p>
                                <p className="text-sm text-gray-500">Получать SMS о статусе обслуживания</p>
                              </div>
                              <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Уведомления о спецпредложениях</p>
                                <p className="text-sm text-gray-500">Получать информацию о скидках и акциях</p>
                              </div>
                              <Switch />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-bmw-blue hover:bg-blue-700">
                        Сохранить изменения
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;
