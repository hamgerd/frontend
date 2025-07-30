import { ActivityIcon, EyeIcon, HeartIcon, ShoppingCartIcon, TicketIcon } from "lucide-react";

import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const activities = [
  {
    id: 1,
    type: "خرید",
    description: "خرید بلیط کنسرت محمدرضا گلزار",
    time: "۲ ساعت پیش",
    icon: ShoppingCartIcon,
    color: "text-green-500",
  },
  {
    id: 2,
    type: "علاقه‌مندی",
    description: "افزودن کنسرت حمید هیراد به علاقه‌مندی‌ها",
    time: "۵ ساعت پیش",
    icon: HeartIcon,
    color: "text-red-500",
  },
  {
    id: 3,
    type: "مشاهده",
    description: "مشاهده جزئیات نمایش شب یلدا",
    time: "۱ روز پیش",
    icon: EyeIcon,
    color: "text-blue-500",
  },
  {
    id: 4,
    type: "خرید",
    description: "خرید بلیط سمینار کسب و کار",
    time: "۲ روز پیش",
    icon: ShoppingCartIcon,
    color: "text-green-500",
  },
  {
    id: 5,
    type: "نشان",
    description: "نشان کردن جشنواره فیلم فجر",
    time: "۳ روز پیش",
    icon: TicketIcon,
    color: "text-yellow-500",
  },
];

const stats = [
  { label: "کل فعالیت‌ها", value: "۱۲۸", change: "+۱۲%" },
  { label: "خریدهای این ماه", value: "۸", change: "+۲۵%" },
  { label: "رویدادهای مشاهده شده", value: "۴۵", change: "+۸%" },
  { label: "علاقه‌مندی‌های جدید", value: "۱۵", change: "+۳۰%" },
];

export default function ActivitiesPage() {
  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="فعالیت‌های من" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                      <ActivityIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">{stat.change}</span> نسبت به ماه قبل
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>فعالیت‌های اخیر</CardTitle>
                      <CardDescription>آخرین فعالیت‌های شما در سایت</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {activities.map(activity => (
                        <div
                          className="flex items-center space-x-4 space-x-reverse"
                          key={activity.id}
                        >
                          <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                            <activity.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">{activity.description}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                          <Badge variant="outline">{activity.type}</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>فعالیت‌های محبوب</CardTitle>
                      <CardDescription>بیشترین فعالیت‌های شما</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">مشاهده رویدادها</span>
                        <span className="text-sm font-medium">۴۵%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">خرید بلیط</span>
                        <span className="text-sm font-medium">۳۰%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm">علاقه‌مندی</span>
                        <span className="text-sm font-medium">۲۵%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>آمار هفتگی</CardTitle>
                      <CardDescription>فعالیت‌های این هفته</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold">۲۳</div>
                        <p className="text-sm text-muted-foreground">فعالیت این هفته</p>
                        <Badge className="mt-2">+۱۵% نسبت به هفته قبل</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
