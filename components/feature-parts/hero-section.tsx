import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-muted flex w-full items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            هم‌گرد، جایی برای ساختن و مدیریت رویدادهایی که به‌یاد می‌مانند.
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            پلتفرم جامع برگزاری و مدیریت رویدادهای آموزشی، علمی و تجاری
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/events">مشاهده رویدادها</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/new-event">ایجاد رویداد جدید</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
