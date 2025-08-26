"use client";

import type * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import PasswordField from "@/components/shared/password-field";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { signupSchema } from "@/validator/signup-schema";

interface SignupFormProps {
  setEmailSent: (value: boolean) => void;
}

export default function SignupForm({ setEmailSent }: SignupFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    setIsLoading(true);
    try {
      await api.post("/api/v1/users/register/", {
        email: values.email.toLowerCase(),
        password: values.password,
      });
      setEmailSent(true);
    } catch (error) {
      console.log("error message is: ", error);
      toast({
        title: "خطا در ثبت‌نام",
        description: "لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
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
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>رمز عبور</FormLabel>
              <FormControl>
                <div>
                  <PasswordField
                    field={field}
                    setShowPassword={setShowPassword}
                    showPassword={showPassword}
                  />{" "}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>تکرار رمز عبور</FormLabel>
              <FormControl>
                <div>
                  <PasswordField
                    field={field}
                    setShowPassword={setShowPassword}
                    showPassword={showPassword}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="terms"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-y-0 space-x-3 space-x-reverse rounded-md border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="mr-1 leading-none">
                <FormLabel>
                  با{" "}
                  <Link className="text-primary hover:underline" href="/tos">
                    شرایط استفاده
                  </Link>{" "}
                  و{" "}
                  <Link className="text-primary hover:underline" href="/terms">
                    حریم خصوصی
                  </Link>{" "}
                  موافقم
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={isLoading} type="submit">
          {isLoading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </Button>
      </form>
    </Form>
  );
}
