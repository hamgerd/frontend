import Link from "next/link"
import { CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] py-20">
      <CalendarDays className="h-20 w-20 text-muted-foreground mb-6" />
      <h1 className="text-4xl font-bold mb-4">۴۰۴ - صفحه پیدا نشد</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center">متأسفانه صفحه مورد نظر شما پیدا نشد.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/events">مشاهده رویدادها</Link>
        </Button>
      </div>
    </div>
  )
}
