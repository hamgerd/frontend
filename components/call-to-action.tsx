import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 flex items-center justify-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">همین امروز شروع کنید</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            در چند دقیقه ثبت‌نام کنید و اولین رویداد خود را ایجاد کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg">
              <Link href="/signup">ثبت‌نام رایگان</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">درباره ما</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
