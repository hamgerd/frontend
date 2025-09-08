"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import api from "@/lib/axios";

export default function TokenVerify() {
  const searchParams = useSearchParams();
  const Token = searchParams.get("token");
  const [verifyStatus, setVerifyStatus] = useState<"error" | "pending" | "success">("pending");

  useEffect(() => {
    if (!Token) {
      setVerifyStatus("error");
      return;
    }
    const sendToken = async () => {
      try {
        const res = await api.get(`api/v1/users/email/verify/${Token}/`);
        if (res.data.message) {
          setVerifyStatus("success");
        } else {
          setVerifyStatus("error");
        }
      } catch (_erro) {
        setVerifyStatus("error");
      }
    };
    sendToken();
  }, [Token]);

  return (
    <div className="mt-8 flex w-full items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        {verifyStatus === "pending" && (
          <div className="flex flex-col items-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-zinc-500" />
            <h2 className="mb-1 text-lg font-semibold">در حال بررسی لینک تایید...</h2>
            <p className="text-sm text-zinc-500">لطفا صبر کنید</p>
          </div>
        )}
        {verifyStatus === "success" && (
          <div className="flex flex-col items-center">
            <div className="mb-3 rounded-full bg-green-100 p-2 dark:bg-green-900">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="mb-1 text-lg font-semibold">ایمیل شما با موفقیت تایید شد!</h2>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 mt-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
            >
              <Link href="/login">ورود </Link>
            </Button>
          </div>
        )}
        {verifyStatus === "error" && (
          <div className="flex flex-col items-center">
            <div className="mb-3 rounded-full bg-red-100 p-2 dark:bg-red-900">
              <svg
                className="h-6 w-6 text-red-600 dark:text-red-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="mb-1 text-lg font-semibold">تایید ایمیل ناموفق بود</h2>
            <p className="text-sm text-zinc-500">لینک معتبر نیست یا قبلا استفاده شده است.</p>
          </div>
        )}
      </div>
    </div>
  );
}
