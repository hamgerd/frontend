import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { VerifyContent } from "@/components/VerifyContent";

export default function VerifyPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-md shadow-lg mx-7">
        <Suspense fallback={<div className="p-8 text-center">در حال بررسی پرداخت...</div>}>
          <VerifyContent />
        </Suspense>
      </Card>
    </div>
  );
}
