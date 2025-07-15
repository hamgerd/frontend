"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PasswordResetForm } from "@/components/PasswordResetForm";

export default function PasswordResetPage() {
  const [success, setSuccess] = useState(false);

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
          <blockquote className="space-y-2" />
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
            <Suspense fallback={<div>در حال بارگیری...</div>}>
              <PasswordResetForm setSuccess={setSuccess} />
            </Suspense>
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
