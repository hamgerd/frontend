"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import SignupForm from "@/components/auth/signup-form";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="container flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex">
        <div className="bg-primary absolute inset-0" />
        <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
          <Link className="flex items-center text-white" href="/">
            هم‌گرد
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              ثبت‌نام در این پلتفرم به ما امکان داد تا کارگاه‌های آموزشی خود را به آسانی مدیریت
              کنیم.
            </p>
          </blockquote>
        </div>
      </div>
      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">ایجاد حساب کاربری</h1>
            <p className="text-muted-foreground text-sm">
              اطلاعات خود را وارد کنید تا حساب کاربری جدید ایجاد شود
            </p>
          </div>
          {emailSent ? (
            <div className="flex flex-col items-center rounded-md bg-green-100 p-4 text-center text-green-700 dark:bg-green-900 dark:text-green-200">
              <svg
                className="mb-2 h-8 w-8 text-green-600 dark:text-green-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="mb-1 text-lg font-semibold">ثبت‌نام موفقیت‌آمیز بود!</h2>
              <p className="mb-2 text-sm text-zinc-500">ایمیل تایید برای شما ارسال شد.</p>
              <p className="mb-2 text-xs text-zinc-400">
                لطفاً صندوق ورودی یا پوشه اسپم ایمیل خود را بررسی کنید و روی لینک تایید کلیک کنید.
              </p>
              <Link
                className="bg-primary hover:bg-primary/90 mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
                href="/login"
              >
                ورود به حساب کاربری
              </Link>
              <Link
                className="border-primary text-primary hover:bg-primary/10 mt-2 inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors"
                href="/"
              >
                بازگشت به خانه
              </Link>
            </div>
          ) : (
            <SignupForm setEmailSent={setEmailSent} />
          )}
          {!emailSent && (
            <>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background text-muted-foreground px-2">یا</span>
                </div>
              </div>
              <div className="text-center text-sm">
                <span>قبلا ثبت‌نام کرده‌اید؟ </span>
                <Link className="text-primary hover:underline" href="/login">
                  وارد شوید
                </Link>
              </div>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  بازگشت به صفحه اصلی
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
