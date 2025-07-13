"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import api from "@/lib/axios";

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

const passwordResetSchema = z
  .object({
    password: z.string().min(8, { message: "رمز عبور باید حداقل ۸ کاراکتر باشد" }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });

export default function PasswordResetPage() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof passwordResetSchema>>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof passwordResetSchema>) {
    if (!token) {
      toast({
        title: "توکن یافت نشد",
        description: "لینک بازیابی معتبر نیست.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    try {
      await api.post("/api/v1/users/password-reset/", {
        token,
        password: values.password,
      });
      setSuccess(true);
      toast({
        title: "رمز عبور با موفقیت تغییر کرد",
        description: "اکنون می‌توانید وارد شوید.",
        variant: "default",
      });
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      toast({
        title: "خطا در تغییر رمز عبور",
        description: "لینک یا رمز عبور معتبر نیست.",
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
            <h1 className="text-2xl font-semibold tracking-tight">بازیابی رمز عبور</h1>
            <p className="text-sm text-muted-foreground">رمز عبور جدید خود را وارد کنید</p>
          </div>
          {success ? (
            <div className="rounded-md bg-green-100 dark:bg-green-900 p-4 text-center text-green-700 dark:text-green-200">
              رمز عبور با موفقیت تغییر کرد. در حال انتقال به صفحه ورود...
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رمز عبور جدید</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="رمز عبور جدید" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>تکرار رمز عبور</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="تکرار رمز عبور" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "در حال ارسال..." : "تغییر رمز عبور"}
                </Button>
              </form>
            </Form>
          )}
          <Button variant="outline" className="mt-4" asChild>
            <Link href="/login">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به ورود
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
