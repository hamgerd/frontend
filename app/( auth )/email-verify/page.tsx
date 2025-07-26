import TokenVerify from "@/components/email/verify-email";
import { Suspense } from "react";

export default function EmailVerify() {
  return (
    <Suspense>
      <TokenVerify />
    </Suspense>
  );
}
