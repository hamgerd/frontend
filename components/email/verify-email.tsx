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
    <div className="flex justify-center items-center w-full mt-8">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
        {verifyStatus === "pending" && (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-500 mb-4" />
            <h2 className="text-lg font-semibold mb-1">در حال بررسی لینک تایید...</h2>
            <p className="text-zinc-500 text-sm">لطفا صبر کنید</p>
          </div>
        )}
        {verifyStatus === "success" && (
          <div className="flex flex-col items-center">
            <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mb-3">
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
            <h2 className="text-lg font-semibold mb-1">ایمیل شما با موفقیت تایید شد!</h2>
            <Button
              asChild
              className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Link href="/">برگشت به خانه</Link>
            </Button>
          </div>
        )}
        {verifyStatus === "error" && (
          <div className="flex flex-col items-center">
            <div className="bg-red-100 dark:bg-red-900 rounded-full p-2 mb-3">
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
            <h2 className="text-lg font-semibold mb-1">تایید ایمیل ناموفق بود</h2>
            <p className="text-zinc-500 text-sm">لینک معتبر نیست یا قبلا استفاده شده است.</p>
          </div>
        )}
      </div>
    </div>
  );
}
