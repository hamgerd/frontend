import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SettingsIcon, ShieldIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="تنظیمات" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="max-w-4xl mx-auto w-full space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <SettingsIcon className="h-5 w-5" />
                      تنظیمات عمومی
                    </CardTitle>
                    <CardDescription>تنظیمات کلی حساب کاربری</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">حالت تاریک</Label>
                        <p className="text-sm text-muted-foreground">
                          تغییر ظاهر سایت به حالت تاریک
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">زبان رابط کاربری</Label>
                        <p className="text-sm text-muted-foreground">انتخاب زبان نمایش سایت</p>
                      </div>
                      <Select defaultValue="fa">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fa">فارسی</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">منطقه زمانی</Label>
                        <p className="text-sm text-muted-foreground">
                          تنظیم منطقه زمانی برای نمایش تاریخ و ساعت
                        </p>
                      </div>
                      <Select defaultValue="tehran">
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tehran">تهران (GMT+3:30)</SelectItem>
                          <SelectItem value="dubai">دبی (GMT+4:00)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldIcon className="h-5 w-5" />
                      تنظیمات حریم خصوصی
                    </CardTitle>
                    <CardDescription>مدیریت حریم خصوصی و امنیت</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">نمایش پروفایل عمومی</Label>
                        <p className="text-sm text-muted-foreground">
                          اجازه مشاهده پروفایل توسط سایر کاربران
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">نمایش فعالیت‌ها</Label>
                        <p className="text-sm text-muted-foreground">
                          نمایش فعالیت‌های شما به دوستان
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">ورود دو مرحله‌ای</Label>
                        <p className="text-sm text-muted-foreground">
                          افزایش امنیت حساب با تایید دو مرحله‌ای
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        تنظیم
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>تنظیمات پیشرفته</CardTitle>
                    <CardDescription>تنظیمات تخصصی و پیشرفته</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">ذخیره تاریخچه جستجو</Label>
                        <p className="text-sm text-muted-foreground">
                          ذخیره جستجوهای انجام شده برای پیشنهادات بهتر
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">پیشنهادات هوشمند</Label>
                        <p className="text-sm text-muted-foreground">
                          دریافت پیشنهادات رویداد بر اساس علاقه‌مندی‌ها
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">حذف خودکار داده‌ها</Label>
                        <p className="text-sm text-muted-foreground">
                          حذف خودکار داده‌های قدیمی پس از مدت زمان مشخص
                        </p>
                      </div>
                      <Select defaultValue="never">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="never">هرگز</SelectItem>
                          <SelectItem value="1year">1 سال</SelectItem>
                          <SelectItem value="2years">2 سال</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>مدیریت حساب</CardTitle>
                    <CardDescription>عملیات مربوط به حساب کاربری</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">دانلود داده‌های شخصی</p>
                        <p className="text-sm text-muted-foreground">
                          دریافت کپی از تمام داده‌های شما
                        </p>
                      </div>
                      <Button variant="outline">دانلود</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">غیرفعال کردن حساب</p>
                        <p className="text-sm text-muted-foreground">
                          غیرفعال کردن موقت حساب کاربری
                        </p>
                      </div>
                      <Button variant="outline">غیرفعال</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-red-600">حذف حساب</p>
                        <p className="text-sm text-muted-foreground">
                          حذف دائمی حساب و تمام داده‌ها
                        </p>
                      </div>
                      <Button variant="destructive">حذف</Button>
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
