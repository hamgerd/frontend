"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import api, { setAccessToken, setRefreshToken } from "@/lib/axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { loginSchema } from "@/validator/login-schema";

export default function LoginPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    try {
      const res = await api.post("api/v1/users/auth/token/", {
        email: values.email.toLowerCase(),
        password: values.password,
      });

      const refresh = res.data.refresh;
      setRefreshToken(refresh);

      const accessRes = await api.post<{ access: string }>("/api/v1/users/auth/token/refresh/", {
        refresh,
      });

      setAccessToken(accessRes.data.access);
      if (res.status == 200) {
        window.location.href = "/";
      }
      toast({
        title: "ورود موفقیت‌آمیز",
        description: "شما با موفقیت وارد شدید.",
        variant: "default",
      });
    } catch (err) {
      console.log(err);
      console.log("Toast error being called");
      toast({
        title: "ورود ناموفق",
        description: "ورود شما ناموفق بود. لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
          <Link href="/" className="flex items-center text-white">
            هم‌گرد
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2"></blockquote>
        </div>
      </div>
      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">ورود به حساب کاربری</h1>
            <p className="text-sm text-muted-foreground">اطلاعات حساب کاربری خود را وارد کنید</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input placeholder="example@domain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رمز عبور</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "در حال ورود..." : "ورود"}
              </Button>
            </form>
          </Form>
          <div className="text-center text-sm">
            <Link href="/forgot-password" className="text-primary hover:underline">
              رمز عبور خود را فراموش کرده‌اید؟
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">یا</span>
            </div>
          </div>
          <div className="text-center text-sm">
            <span>حساب کاربری ندارید؟ </span>
            <Link href="/signup" className="text-primary hover:underline">
              ثبت‌نام کنید
            </Link>
          </div>
          <Button variant="outline" className="mt-4" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به صفحه اصلی
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
