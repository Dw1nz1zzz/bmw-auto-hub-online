
import React, { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

// Тестовые данные услуг
const initialServices = [
  {
    id: 1,
    name: "Компьютерная диагностика",
    category: "Диагностика",
    description: "Полная диагностика всех электронных систем автомобиля",
    price: 3000,
    duration: 60,
  },
  {
    id: 2,
    name: "Техническое обслуживание",
    category: "ТО",
    description: "Регламентное ТО согласно рекомендациям производителя",
    price: 15000,
    duration: 180,
  },
  {
    id: 3,
    name: "Замена масла и фильтров",
    category: "Обслуживание",
    description: "Замена моторного масла и всех необходимых фильтров",
    price: 8000,
    duration: 60,
  },
  {
    id: 4,
    name: "Ремонт двигателя",
    category: "Ремонт",
    description: "Диагностика и устранение неисправностей двигателя",
    price: 20000,
    duration: 300,
  },
  {
    id: 5,
    name: "Ремонт ходовой части",
    category: "Ремонт",
    description: "Замена амортизаторов, пружин, рычагов и других элементов подвески",
    price: 12000,
    duration: 240,
  },
];

const ServicesManagement = () => {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentService, setCurrentService] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: 0,
    duration: 0,
  });

  // Фильтрация услуг по поиску
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Обработчики формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "duration" ? Number(value) : value,
    });
  };

  const handleAddService = () => {
    const newService = {
      id: services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1,
      ...formData,
    };
    setServices([...services, newService]);
    setFormData({
      name: "",
      category: "",
      description: "",
      price: 0,
      duration: 0,
    });
    setIsAddDialogOpen(false);
  };

  const handleEditService = () => {
    if (!currentService) return;
    
    setServices(
      services.map((service) =>
        service.id === currentService.id ? { ...service, ...formData } : service
      )
    );
    
    setIsEditDialogOpen(false);
  };

  const handleDeleteService = () => {
    if (!currentService) return;
    
    setServices(services.filter((service) => service.id !== currentService.id));
    setIsDeleteDialogOpen(false);
  };

  const openEditDialog = (service: any) => {
    setCurrentService(service);
    setFormData({
      name: service.name,
      category: service.category,
      description: service.description,
      price: service.price,
      duration: service.duration,
    });
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (service: any) => {
    setCurrentService(service);
    setIsDeleteDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Управление услугами</h1>
        <div className="flex w-full md:w-auto space-x-2">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Поиск услуг..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-bmw-blue hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-1" />
                Добавить услугу
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Добавить новую услугу</DialogTitle>
                <DialogDescription>
                  Заполните все поля, чтобы добавить услугу в каталог.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Название услуги</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Например: Замена масла"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Категория</Label>
                    <Input
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      placeholder="Например: Обслуживание"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Описание</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Подробное описание услуги"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Цена (₽)</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Стоимость в рублях"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Длительность (мин)</Label>
                      <Input
                        id="duration"
                        name="duration"
                        type="number"
                        value={formData.duration}
                        onChange={handleInputChange}
                        placeholder="Время в минутах"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Отмена
                </Button>
                <Button className="bg-bmw-blue hover:bg-blue-700" onClick={handleAddService}>
                  Добавить
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Список услуг */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Название</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead>Описание</TableHead>
                <TableHead>Цена (₽)</TableHead>
                <TableHead>Длительность</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>{service.id}</TableCell>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{service.category}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{service.description}</TableCell>
                  <TableCell>{service.price.toLocaleString()} ₽</TableCell>
                  <TableCell>{service.duration} мин</TableCell>
                  <TableCell className="text-right space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEditDialog(service)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => openDeleteDialog(service)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredServices.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    Услуги не найдены
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Редактировать услугу</DialogTitle>
            <DialogDescription>
              Внесите изменения в данные услуги.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Название услуги</Label>
                <Input
                  id="edit-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-category">Категория</Label>
                <Input
                  id="edit-category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Описание</Label>
                <Textarea
                  id="edit-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-price">Цена (₽)</Label>
                  <Input
                    id="edit-price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-duration">Длительность (мин)</Label>
                  <Input
                    id="edit-duration"
                    name="duration"
                    type="number"
                    value={formData.duration}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Отмена
            </Button>
            <Button className="bg-bmw-blue hover:bg-blue-700" onClick={handleEditService}>
              Сохранить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Удалить услугу</DialogTitle>
            <DialogDescription>
              Вы действительно хотите удалить эту услугу? Это действие невозможно отменить.
            </DialogDescription>
          </DialogHeader>
          {currentService && (
            <div className="py-4">
              <p className="font-medium">{currentService.name}</p>
              <p className="text-sm text-gray-500">{currentService.category}</p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Отмена
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteService}
            >
              Удалить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default ServicesManagement;
