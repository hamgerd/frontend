"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import api from "@/lib/axios";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "ایمیل معتبر وارد کنید" }),
});

export default function ForgotPasswordPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    setIsLoading(true);
    try {
      await api.post("/api/v1/users/password-reset-request/", {
        email: values.email.toLowerCase(),
      });
      setSent(true);
      toast({
        title: "درخواست ارسال شد",
        description: "اگر ایمیل وارد شده معتبر باشد، لینک بازیابی ارسال خواهد شد.",
        variant: "default",
      });
    } catch (_error) {
      toast({
        title: "خطا در ارسال درخواست",
        description: "ارسال درخواست بازیابی رمز عبور ناموفق بود.",
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
          <Link className="flex items-center text-white" href="/">
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
            <h1 className="text-2xl font-semibold tracking-tight">فراموشی رمز عبور</h1>
            <p className="text-sm text-muted-foreground">
              ایمیل خود را وارد کنید تا لینک بازیابی ارسال شود
            </p>
          </div>
          {sent ? (
            <div className="rounded-md bg-green-100 dark:bg-green-900 p-4 text-center text-green-700 dark:text-green-200">
              اگر ایمیل وارد شده معتبر باشد، لینک بازیابی رمز عبور ارسال خواهد شد.
            </div>
          ) : (
            <Form {...form}>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  name="email"
                  control={form.control}
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
                <Button className="w-full" disabled={isLoading} type="submit">
                  {isLoading ? "در حال ارسال..." : "ارسال لینک بازیابی"}
                </Button>
              </form>
            </Form>
          )}
          <Button asChild className="mt-4" variant="outline">
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
