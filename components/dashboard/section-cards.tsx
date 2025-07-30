import { CalendarIcon, CreditCardIcon, HeartIcon, TicketIcon, TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="data-[slot=card]:*:shadow-2xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 data-[slot=card]:*:bg-linear-to-t data-[slot=card]:*:from-emerald-500/10 data-[slot=card]:*:to-card dark:data-[slot=card]:*:bg-card lg:px-6">
      <Card className="@container/card hamgerd-card">
        <CardHeader className="relative">
          <CardDescription>اعتبار کیف پول</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-emerald-400">
            ۲,۵۰۰,۰۰۰ تومان
          </CardTitle>
          <div className="absolute left-4 top-4">
            <CreditCardIcon className="h-6 w-6 text-emerald-500" />
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-emerald-400">
            افزایش ۱۲.۵٪ این ماه <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">موجودی قابل استفاده</div>
        </CardFooter>
      </Card>
      <Card className="@container/card hamgerd-card">
        <CardHeader className="relative">
          <CardDescription>بلیط‌های فعال</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-emerald-400">
            ۸
          </CardTitle>
          <div className="absolute left-4 top-4">
            <TicketIcon className="h-6 w-6 text-emerald-500" />
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-emerald-400">
            ۳ رویداد این هفته <CalendarIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">رویدادهای آینده</div>
        </CardFooter>
      </Card>
      <Card className="@container/card hamgerd-card">
        <CardHeader className="relative">
          <CardDescription>علاقه‌مندی‌ها</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-emerald-400">
            ۲۴
          </CardTitle>
          <div className="absolute left-4 top-4">
            <HeartIcon className="h-6 w-6 text-emerald-500" />
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-emerald-400">
            ۵ رویداد جدید <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">رویدادهای مورد علاقه</div>
        </CardFooter>
      </Card>
      <Card className="@container/card hamgerd-card">
        <CardHeader className="relative">
          <CardDescription>امتیاز وفاداری</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-emerald-400">
            ۱,۲۳۰
          </CardTitle>
          <div className="absolute left-4 top-4">
            <Badge
              className="flex gap-1 rounded-lg text-xs border-emerald-500 text-emerald-400"
              variant="outline"
            >
              <TrendingUpIcon className="size-3" />
              +۴.۵٪
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-emerald-400">
            عملکرد پایدار <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">امتیازات قابل استفاده</div>
        </CardFooter>
      </Card>
    </div>
  );
}
