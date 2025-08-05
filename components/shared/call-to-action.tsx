import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="flex w-full items-center justify-center py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">همین امروز شروع کنید</h2>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            در چند دقیقه ثبت‌نام کنید و اولین رویداد خود را ایجاد کنید
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/signup">ثبت‌نام رایگان</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">درباره ما</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
