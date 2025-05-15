
import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log("Login attempt");
  };

  return (
    <AuthLayout title="Вход в личный кабинет">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@mail.com"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Пароль</Label>
            <Link
              to="/auth/reset-password"
              className="text-sm font-medium text-bmw-blue hover:underline"
            >
              Забыли пароль?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm">Запомнить меня</Label>
        </div>

        <Button type="submit" className="w-full bg-bmw-blue hover:bg-blue-700">
          Войти
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-600">Еще нет аккаунта? </span>
          <Link
            to="/auth/register"
            className="font-medium text-bmw-blue hover:underline"
          >
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
