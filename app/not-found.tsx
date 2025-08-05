import { CalendarDays } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center py-20">
      <CalendarDays className="text-muted-foreground mb-6 h-20 w-20" />
      <h1 className="mb-4 text-4xl font-bold">۴۰۴ - صفحه پیدا نشد</h1>
      <p className="text-muted-foreground mb-8 text-center text-xl">
        متأسفانه صفحه مورد نظر شما پیدا نشد.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/events">مشاهده رویدادها</Link>
        </Button>
      </div>
    </div>
  );
}
