"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";

import { PasswordResetForm } from "@/components/auth/password-reset-form";
import { Button } from "@/components/ui/button";

export default function PasswordResetPage() {
  const [success, setSuccess] = useState(false);

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
          <blockquote className="space-y-2" />
        </div>
      </div>

      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">بازیابی رمز عبور</h1>
            <p className="text-muted-foreground text-sm">رمز عبور جدید خود را وارد کنید</p>
          </div>

          {success ? (
            <div className="rounded-md bg-green-100 p-4 text-center text-green-700 dark:bg-green-900 dark:text-green-200">
              رمز عبور با موفقیت تغییر کرد. در حال انتقال به صفحه ورود...
            </div>
          ) : (
            <Suspense fallback={<div>در حال بارگیری...</div>}>
              <PasswordResetForm setSuccess={setSuccess} />
            </Suspense>
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
