import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquareIcon, MailIcon, BellIcon, AlertCircleIcon } from "lucide-react";

const messages = [
  {
    id: 1,
    type: "اعلان",
    subject: "تایید خرید بلیط کنسرت محمدرضا گلزار",
    content: "بلیط شما با موفقیت خریداری شد. کد رهگیری: TK123456",
    time: "۱ ساعت پیش",
    read: false,
    priority: "high",
  },
  {
    id: 2,
    type: "یادآوری",
    subject: "یادآوری رویداد فردا",
    content: "نمایش شب یلدا فردا ساعت ۱۹:۳۰ در تئاتر شهر برگزار می‌شود.",
    time: "۳ ساعت پیش",
    read: false,
    priority: "medium",
  },
  {
    id: 3,
    type: "تخفیف",
    subject: "تخفیف ویژه برای شما!",
    content: "۲۰% تخفیف برای خرید بلیط کنسرت‌های این ماه. کد: SAVE20",
    time: "۱ روز پیش",
    read: true,
    priority: "low",
  },
  {
    id: 4,
    type: "اطلاعیه",
    subject: "تغییر زمان رویداد",
    content: "زمان برگزاری سمینار کسب و کار از ساعت ۱۴:۰۰ به ۱۵:۰۰ تغییر یافت.",
    time: "۲ روز پیش",
    read: true,
    priority: "high",
  },
  {
    id: 5,
    type: "تبریک",
    subject: "تولدتان مبارک!",
    content: "تیم ایونت تیکت تولدتان را تبریک می‌گوید. هدیه ویژه در انتظار شماست.",
    time: "۳ روز پیش",
    read: true,
    priority: "low",
  },
];

export default function MessagesPage() {
  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="صندوق پیام‌ها" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">کل پیام‌ها</CardTitle>
                    <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{messages.length}</div>
                    <p className="text-xs text-muted-foreground">پیام دریافتی</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">پیام‌های خوانده نشده</CardTitle>
                    <MailIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-500">{unreadCount}</div>
                    <p className="text-xs text-muted-foreground">نیاز به بررسی</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">اعلان‌ها</CardTitle>
                    <BellIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۸</div>
                    <p className="text-xs text-muted-foreground">اعلان فعال</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">پیام‌های مهم</CardTitle>
                    <AlertCircleIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">۳</div>
                    <p className="text-xs text-muted-foreground">اولویت بالا</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>پیام‌های اخیر</CardTitle>
                  <CardDescription>آخرین پیام‌های دریافتی</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`p-4 border rounded-lg ${
                        !message.read ? "bg-muted/50 border-primary/50" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className={`font-medium ${!message.read ? "font-bold" : ""}`}>
                              {message.subject}
                            </h4>
                            {!message.read && (
                              <Badge variant="destructive" className="text-xs">
                                جدید
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {message.type}
                            </Badge>
                            {message.priority === "high" && (
                              <Badge variant="destructive" className="text-xs">
                                مهم
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{message.content}</p>
                          <p className="text-xs text-muted-foreground">{message.time}</p>
                        </div>
                        <div className="flex gap-2">
                          {!message.read && (
                            <Button size="sm" variant="outline">
                              علامت‌گذاری به عنوان خوانده شده
                            </Button>
                          )}
                          <Button size="sm" variant="ghost">
                            حذف
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
