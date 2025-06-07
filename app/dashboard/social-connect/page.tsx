import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const socialNetworks = [
  {
    id: "instagram",
    name: "اینستاگرام",
    icon: InstagramIcon,
    connected: true,
    username: "@ali_ahmadi",
    followers: "1.2K",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: "twitter",
    name: "توییتر",
    icon: TwitterIcon,
    connected: false,
    username: null,
    followers: null,
    color: "bg-blue-500",
  },
  {
    id: "facebook",
    name: "فیسبوک",
    icon: FacebookIcon,
    connected: true,
    username: "علی احمدی",
    followers: "850",
    color: "bg-blue-600",
  },
  {
    id: "linkedin",
    name: "لینکدین",
    icon: LinkedinIcon,
    connected: false,
    username: null,
    followers: null,
    color: "bg-blue-700",
  },
];

export default function SocialConnectPage() {
  const connectedCount = socialNetworks.filter(network => network.connected).length;

  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="اتصال شبکه‌های اجتماعی" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="max-w-4xl mx-auto w-full space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShareIcon className="h-5 w-5" />
                      مدیریت شبکه‌های اجتماعی
                    </CardTitle>
                    <CardDescription>
                      حساب‌های شبکه‌های اجتماعی خود را متصل کنید تا بتوانید رویدادها را به راحتی
                      اشتراک‌گذاری کنید
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold">{connectedCount}</div>
                        <p className="text-sm text-muted-foreground">شبکه متصل شده</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold">
                          {socialNetworks.length - connectedCount}
                        </div>
                        <p className="text-sm text-muted-foreground">شبکه در انتظار اتصال</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  {socialNetworks.map(network => (
                    <Card key={network.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${network.color}`}>
                              <network.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{network.name}</CardTitle>
                              {network.connected && network.username && (
                                <CardDescription>{network.username}</CardDescription>
                              )}
                            </div>
                          </div>
                          <Badge variant={network.connected ? "default" : "secondary"}>
                            {network.connected ? "متصل" : "قطع"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {network.connected ? (
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span>دنبال‌کنندگان:</span>
                              <span className="font-medium">{network.followers}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>آخرین اشتراک‌گذاری:</span>
                              <span className="text-muted-foreground">۲ روز پیش</span>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="flex-1">
                                تنظیمات
                              </Button>
                              <Button size="sm" variant="destructive" className="flex-1">
                                قطع اتصال
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                              با اتصال {network.name} می‌توانید رویدادهای خود را به راحتی
                              اشتراک‌گذاری کنید
                            </p>
                            <Button className="w-full">اتصال به {network.name}</Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>تنظیمات اشتراک‌گذاری</CardTitle>
                    <CardDescription>تنظیم نحوه اشتراک‌گذاری رویدادها</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">اشتراک‌گذاری خودکار خریدها</p>
                          <p className="text-sm text-muted-foreground">
                            اشتراک‌گذاری خودکار هنگام خرید بلیط
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          غیرفعال
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">اشتراک‌گذاری علاقه‌مندی‌ها</p>
                          <p className="text-sm text-muted-foreground">
                            اشتراک‌گذاری رویدادهای مورد علاقه
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          فعال
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">اشتراک‌گذاری نظرات</p>
                          <p className="text-sm text-muted-foreground">
                            اشتراک‌گذاری نظرات و امتیازات
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          فعال
                        </Button>
                      </div>
                    </div>
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
