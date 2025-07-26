import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockIcon, ShieldIcon, KeyIcon } from "lucide-react";

export default function ChangePasswordPage() {
  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="تغییر رمز عبور" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="max-w-2xl mx-auto w-full space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LockIcon className="h-5 w-5" />
                      تغییر رمز عبور
                    </CardTitle>
                    <CardDescription>برای امنیت حساب خود، رمز عبور قوی انتخاب کنید</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">رمز عبور جدید</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">تکرار رمز عبور جدید</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button className="w-full">تغییر رمز عبور</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldIcon className="h-5 w-5" />
                      نکات امنیتی
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2 space-x-reverse">
                      <KeyIcon className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <p className="text-sm">رمز عبور باید حداقل ۸ کاراکتر باشد</p>
                    </div>
                    <div className="flex items-start space-x-2 space-x-reverse">
                      <KeyIcon className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <p className="text-sm">ترکیبی از حروف بزرگ و کوچک استفاده کنید</p>
                    </div>
                    <div className="flex items-start space-x-2 space-x-reverse">
                      <KeyIcon className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <p className="text-sm">حداقل یک عدد و یک کاراکتر خاص اضافه کنید</p>
                    </div>
                    <div className="flex items-start space-x-2 space-x-reverse">
                      <KeyIcon className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <p className="text-sm">از اطلاعات شخصی در رمز عبور استفاده نکنید</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>تاریخچه تغییرات</CardTitle>
                    <CardDescription>آخرین تغییرات رمز عبور</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">آخرین تغییر رمز عبور</span>
                        <span className="text-sm text-muted-foreground">1403/08/15</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">تعداد تغییرات امسال</span>
                        <span className="text-sm text-muted-foreground">۳ بار</span>
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
