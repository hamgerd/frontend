import TokenVerify from "@/components/verify-user";
import { Suspense } from "react";

export default function EmailVerify() {
  return (
    <Suspense>
      <TokenVerify />
    </Suspense>
  );
}
