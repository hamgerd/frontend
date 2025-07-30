import { CopyIcon, GiftIcon, ShareIcon, UsersIcon } from "lucide-react";

import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const referralStats = [
  { label: "دوستان معرفی شده", value: "12", change: "+3 این ماه" },
  { label: "پاداش دریافتی", value: "240,000", change: "تومان" },
  { label: "تخفیف استفاده شده", value: "8", change: "از 12 تخفیف" },
  { label: "امتیاز کسب شده", value: "1,200", change: "امتیاز" },
];

const referralHistory = [
  { name: "محمد رضایی", date: "1403/09/10", status: "تایید شده", reward: "20,000" },
  { name: "فاطمه احمدی", date: "1403/09/05", status: "تایید شده", reward: "20,000" },
  { name: "حسین محمدی", date: "1403/08/28", status: "در انتظار", reward: "20,000" },
  { name: "مریم کریمی", date: "1403/08/20", status: "تایید شده", reward: "20,000" },
];

export default function ReferralPage() {
  const referralCode = "ALI2024";
  const referralLink = `https://eventticket.com/ref/${referralCode}`;

  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="معرفی ایونت به دوستان" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="max-w-4xl mx-auto w-full space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GiftIcon className="h-5 w-5" />
                      برنامه معرفی دوستان
                    </CardTitle>
                    <CardDescription>
                      با معرفی دوستان خود، هم شما و هم دوستانتان ۲۰% تخفیف دریافت کنید!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {referralStats.map((stat, index) => (
                        <div className="text-center p-4 border rounded-lg" key={index}>
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <p className="text-sm font-medium">{stat.label}</p>
                          <p className="text-xs text-muted-foreground">{stat.change}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShareIcon className="h-5 w-5" />
                        کد معرفی شما
                      </CardTitle>
                      <CardDescription>این کد را با دوستان خود به اشتراک بگذارید</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">کد معرفی</label>
                        <div className="flex gap-2">
                          <Input readOnly className="font-mono" value={referralCode} />
                          <Button size="icon" variant="outline">
                            <CopyIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">لینک معرفی</label>
                        <div className="flex gap-2">
                          <Input readOnly className="text-xs" value={referralLink} />
                          <Button size="icon" variant="outline">
                            <CopyIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <ShareIcon className="h-4 w-4 ml-2" />
                          اشتراک‌گذاری
                        </Button>
                        <Button className="flex-1" variant="outline">
                          دعوت از مخاطبین
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>نحوه کارکرد</CardTitle>
                      <CardDescription>مراحل دریافت پاداش</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          1
                        </div>
                        <div>
                          <p className="font-medium">کد معرفی را ارسال کنید</p>
                          <p className="text-sm text-muted-foreground">
                            کد یا لینک معرفی خود را با دوستان به اشتراک بگذارید
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          2
                        </div>
                        <div>
                          <p className="font-medium">دوست شما ثبت‌نام کند</p>
                          <p className="text-sm text-muted-foreground">
                            دوست شما با کد معرفی در سایت ثبت‌نام کند
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          3
                        </div>
                        <div>
                          <p className="font-medium">اولین خرید انجام شود</p>
                          <p className="text-sm text-muted-foreground">
                            پس از اولین خرید، هر دو نفر پاداش دریافت می‌کنید
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UsersIcon className="h-5 w-5" />
                      تاریخچه معرفی‌ها
                    </CardTitle>
                    <CardDescription>لیست دوستان معرفی شده</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {referralHistory.map((referral, index) => (
                        <div
                          className="flex items-center justify-between p-4 border rounded-lg"
                          key={index}
                        >
                          <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                              <span className="text-white font-medium text-sm">
                                {referral.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-medium">{referral.name}</h4>
                              <p className="text-sm text-muted-foreground">{referral.date}</p>
                            </div>
                          </div>
                          <div className="text-left space-y-1">
                            <Badge
                              variant={referral.status === "تایید شده" ? "default" : "secondary"}
                            >
                              {referral.status}
                            </Badge>
                            <p className="text-sm font-medium">
                              {Number.parseInt(referral.reward).toLocaleString("fa-IR")} تومان
                            </p>
                          </div>
                        </div>
                      ))}
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
