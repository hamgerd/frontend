"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { CheckCircle2, XCircle } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function VerifyContent() {
  const searchParams = useSearchParams();
  const Authority = searchParams.get("Authority");
  const Status = searchParams.get("Status");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [paymentResponse, setPaymentResponse] = useState<number | null | string>();

  useEffect(() => {
    const sendAuthority = async () => {
      try {
        const res = await api.get(`api/v1/payment/verify/${Authority}/`);
        setSuccess(res.data.message === "Payment verified");
        setPaymentResponse(res.data);
      } catch {
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    if (Authority && Status === "OK") {
      sendAuthority();
    } else {
      setLoading(false);
    }
  }, [Authority, Status]);

  return (
    <>
      <CardHeader>
        <CardTitle>تایید پرداخت</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {loading ? (
          <span className="text-muted-foreground">در حال بررسی پرداخت...</span>
        ) : success ? (
          <>
            <CheckCircle2 className="text-green-500 w-16 h-16 mb-2" />
            <span className="text-lg font-semibold">پرداخت با موفقیت انجام شد</span>
            <span className="text-sm text-muted-foreground">
              کد پیگیری: {paymentResponse?.ref_id}
            </span>
            <Button asChild className="mt-4 w-full">
              <a href="/dashboard/tickets">بازگشت به داشبورد</a>
            </Button>
          </>
        ) : (
          <>
            <XCircle className="text-destructive w-16 h-16 mb-2" />
            <span className="text-lg font-semibold">پرداخت ناموفق بود</span>
            <span className="text-sm text-muted-foreground">
              کد پیگیری: {paymentResponse?.ref_id || "نامشخص"}
            </span>
            <Button asChild variant="outline" className="mt-4 w-full">
              <a href="/dashboard/tickets">بازگشت به داشبورد</a>
            </Button>
          </>
        )}
      </CardContent>
    </>
  );
}
