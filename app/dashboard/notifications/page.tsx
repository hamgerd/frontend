import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MailIcon, MessageSquareIcon, SmartphoneIcon } from "lucide-react";

const notificationSettings = [
  {
    id: "email-tickets",
    title: "اعلان‌های خرید بلیط",
    description: "دریافت ایمیل هنگام خرید موفق بلیط",
    enabled: true,
    type: "email",
  },
  {
    id: "email-events",
    title: "رویدادهای جدید",
    description: "اطلاع از رویدادهای جدید مطابق علاقه‌مندی‌ها",
    enabled: true,
    type: "email",
  },
  {
    id: "email-offers",
    title: "پیشنهادات ویژه",
    description: "دریافت تخفیف‌ها و پیشنهادات ویژه",
    enabled: false,
    type: "email",
  },
  {
    id: "sms-reminders",
    title: "یادآوری رویدادها",
    description: "پیامک یادآوری قبل از شروع رویداد",
    enabled: true,
    type: "sms",
  },
  {
    id: "sms-tickets",
    title: "وضعیت بلیط‌ها",
    description: "اطلاع از تغییرات وضعیت بلیط‌ها",
    enabled: true,
    type: "sms",
  },
  {
    id: "push-events",
    title: "رویدادهای آینده",
    description: "اعلان‌های موبایل برای رویدادهای نزدیک",
    enabled: true,
    type: "push",
  },
  {
    id: "push-offers",
    title: "تخفیف‌های لحظه‌ای",
    description: "اطلاع فوری از تخفیف‌های محدود",
    enabled: false,
    type: "push",
  },
];

export default function NotificationsPage() {
  const emailNotifications = notificationSettings.filter(n => n.type === "email");
  const smsNotifications = notificationSettings.filter(n => n.type === "sms");
  const pushNotifications = notificationSettings.filter(n => n.type === "push");

  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="تنظیمات اعلان‌ها" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="max-w-4xl mx-auto w-full space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MailIcon className="h-5 w-5" />
                      اعلان‌های ایمیل
                    </CardTitle>
                    <CardDescription>تنظیم اعلان‌های ارسالی به ایمیل شما</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {emailNotifications.map(notification => (
                      <div
                        key={notification.id}
                        className="flex items-center justify-between space-y-0"
                      >
                        <div className="space-y-1">
                          <Label htmlFor={notification.id} className="text-sm font-medium">
                            {notification.title}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                        <Switch id={notification.id} defaultChecked={notification.enabled} />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquareIcon className="h-5 w-5" />
                      اعلان‌های پیامکی
                    </CardTitle>
                    <CardDescription>تنظیم اعلان‌های ارسالی به شماره تلفن شما</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {smsNotifications.map(notification => (
                      <div
                        key={notification.id}
                        className="flex items-center justify-between space-y-0"
                      >
                        <div className="space-y-1">
                          <Label htmlFor={notification.id} className="text-sm font-medium">
                            {notification.title}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                        <Switch id={notification.id} defaultChecked={notification.enabled} />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <SmartphoneIcon className="h-5 w-5" />
                      اعلان‌های موبایل
                    </CardTitle>
                    <CardDescription>تنظیم اعلان‌های push در اپلیکیشن موبایل</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pushNotifications.map(notification => (
                      <div
                        key={notification.id}
                        className="flex items-center justify-between space-y-0"
                      >
                        <div className="space-y-1">
                          <Label htmlFor={notification.id} className="text-sm font-medium">
                            {notification.title}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                        </div>
                        <Switch id={notification.id} defaultChecked={notification.enabled} />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>تنظیمات کلی</CardTitle>
                    <CardDescription>تنظیمات عمومی اعلان‌ها</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">حالت مزاحم نشوید</Label>
                        <p className="text-sm text-muted-foreground">
                          غیرفعال کردن تمام اعلان‌ها از ساعت ۲۲ تا ۸ صبح
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">خلاصه هفتگی</Label>
                        <p className="text-sm text-muted-foreground">
                          دریافت گزارش هفتگی فعالیت‌ها
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Button className="w-full">ذخیره تنظیمات</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
