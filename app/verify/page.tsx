"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { VerifyContent } from "@/components/payment/payment-status";
import { Card } from "@/components/ui/card";

function VerifyPageContent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="mx-7 w-full max-w-md shadow-lg">
        <Suspense fallback={<div className="p-8 text-center">در حال بررسی پرداخت...</div>}>
          <VerifyContentWithParams />
        </Suspense>
      </Card>
    </div>
  );
}

function VerifyContentWithParams() {
  const searchParams = useSearchParams();
  const freeEvent = searchParams.get("freeEvent") === "true";
  return <VerifyContent freeEvent={freeEvent} />;
}

export default VerifyPageContent;
