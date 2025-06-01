// import { AppSidebar } from "@/components/app-sidebar"
// import { SiteHeader } from "@/components/site-header"
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { UserIcon, MailIcon, PhoneIcon, CalendarIcon } from "lucide-react"

// export default function ProfilePage() {
//   return (
//     <div dir="rtl" className="font-sans dark">
//       <SidebarProvider>
//         <AppSidebar variant="inset" />
//         <SidebarInset>
//           <SiteHeader title="حساب کاربری" />
//           <div className="flex flex-1 flex-col">
//             <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
//               <div className="grid gap-6 lg:grid-cols-3">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>تصویر پروفایل</CardTitle>
//                     <CardDescription>تصویر نمایه خود را تغییر دهید</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="flex flex-col items-center space-y-4">
//                       <Avatar className="w-24 h-24">
//                         <AvatarImage src="/placeholder.svg?height=96&width=96" alt="علی احمدی" />
//                         <AvatarFallback>ع.ا</AvatarFallback>
//                       </Avatar>
//                       <div className="space-y-2">
//                         <Button size="sm">تغییر تصویر</Button>
//                         <Button size="sm" variant="outline">حذف تصویر</Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <div className="lg:col-span-2 space-y-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>اطلاعات شخصی</CardTitle>
//                       <CardDescription>اطلاعات حساب کاربری خود را ویرایش کنید</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="grid gap-4 md:grid-cols-2">
//                         <div className="space-y-2">
//                           <Label htmlFor="firstName">نام</Label>
//                           <Input id="firstName" defaultValue="علی" />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="lastName">نام خانوادگی</Label>
//                           <Input id="lastName" defaultValue="احمدی" />
//                         </div>
//                       </div>
//                       <div className="space-y-
//                         </div>
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="email">ایمیل</Label>
//                         <Input id="email" type="email" defaultValue=\"ali@example.com" />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="phone">شماره تلفن</Label>
//                         <Input id="phone" defaultValue="09123456789" />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="birthDate">تاریخ تولد</Label>
//                         <Input id="birthDate" defaultValue="1370/05/15" />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="address">آدرس</Label>
//                         <Textarea id="address" defaultValue="تهران، خیابان ولیعصر، پلاک 123" />
//                       </div>
//                       <Button>ذخیره تغییرات</Button>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle>آمار حساب</CardTitle>
//                       <CardDescription>اطلاعات کلی حساب کاربری شما</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="grid gap-4 md:grid-cols-2">
//                         <div className="flex items-center space-x-2 space-x-reverse">
//                           <UserIcon className="h-4 w-4 text-muted-foreground" />
//                           <div>
//                             <p className="text-sm font-medium">عضویت از</p>
//                             <p className="text-sm text-muted-foreground">1402/03/15</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-2 space-x-reverse">
//                           <CalendarIcon className="h-4 w-4 text-muted-foreground" />
//                           <div>
//                             <p className="text-sm font-medium">آخرین ورود</p>
//                             <p className="text-sm text-muted-foreground">امروز، 14:30</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-2 space-x-reverse">
//                           <MailIcon className="h-4 w-4 text-muted-foreground" />
//                           <div>
//                             <p className="text-sm font-medium">وضعیت ایمیل</p>
//                             <p className="text-sm text-green-500">تایید شده</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-2 space-x-reverse">
//                           <PhoneIcon className="h-4 w-4 text-muted-foreground" />
//                           <div>
//                             <p className="text-sm font-medium">وضعیت تلفن</p>
//                             <p className="text-sm text-green-500">تایید شده</p>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SidebarInset>
//       </SidebarProvider>
//     </div>
//   )
// }
