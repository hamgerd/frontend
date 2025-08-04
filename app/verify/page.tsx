"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { VerifyContent } from "@/components/payment/payment-status";
import { Card } from "@/components/ui/card";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const freeEvent = searchParams.get("freeEvent") === "true";
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-md shadow-lg mx-7">
        <Suspense fallback={<div className="p-8 text-center">در حال بررسی پرداخت...</div>}>
          <VerifyContent freeEvent={freeEvent} />
        </Suspense>
      </Card>
    </div>
  );
}
