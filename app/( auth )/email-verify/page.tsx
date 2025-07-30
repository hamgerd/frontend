import { Suspense } from "react";

import TokenVerify from "@/components/email/verify-email";

export default function EmailVerify() {
  return (
    <Suspense>
      <TokenVerify />
    </Suspense>
  );
}
