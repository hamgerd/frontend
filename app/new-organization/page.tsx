"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import api from "@/lib/axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const organizationFormSchema = z.object({
  name: z.string().min(3, {
    message: "نام سازمان باید حداقل ۳ کاراکتر باشد.",
  }),
  description: z.string().optional(),
  category: z
    .string({
      required_error: "لطفا یک دسته‌بندی انتخاب کنید.",
    })
    .optional(),
  foundedYear: z
    .string({
      required_error: "لطفا سال تاسیس را وارد کنید.",
    })
    .optional(),
  location: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().min(10, {
    message: "شماره تلفن باید حداقل ۱۰ کاراکتر باشد.",
  }),
  email: z
    .string()
    .email({
      message: "لطفا یک ایمیل معتبر وارد کنید.",
    })
    .or(z.literal(""))
    .optional(),
  username: z
    .string()
    .min(3, { message: "نام کاربری باید حداقل ۳ حرف باشد" })
    .max(20, { message: "نام کاربری باید حداکثر ۲۰ حرف باشد" })
    .regex(/^[A-Za-z0-9_]+$/, {
      message:
        "نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و زیرخط (_) باشد",
    }),

  website: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
});

export default function NewOrganizationPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof organizationFormSchema>>({
    resolver: zodResolver(organizationFormSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      foundedYear: "",
      location: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    },
  });
  async function onSubmit(values: z.infer<typeof organizationFormSchema>) {
    setIsLoading(true);

    try {
      await api.post("/api/v1/organization/", {
        name: values.name,
        username: values.username,
        email: values.email,
        description: values.description,
        address: values.address,
        website: values.website,
        phone: values.phone,
        location: values.location,
        linkedin: values.linkedin,
        instagram: values.instagram,
        category: values.category,
        foundedYear: values.foundedYear,
        twitter: values.twitter,
      });

      // Log successful submission
      console.log(values);
      console.log("Logo file:", logoFile);
      console.log("Cover file:", coverFile);

      toast({
        title: "سازمان با موفقیت ایجاد شد",
        description: "سازمان شما ایجاد شد و برای بررسی ارسال شد.",
      });
    } catch (error) {
      console.error("Error submitting organization:", error);
      toast({
        title: "خطا در ایجاد سازمان",
        description:
          "مشکلی در ایجاد سازمان به وجود آمد. لطفا دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            بازگشت به داشبورد
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center gap-4 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          ثبت سازمان جدید
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          اطلاعات سازمان خود را وارد کنید تا آن را برای کاربران منتشر کنیم
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <Card>
            <CardHeader>
              <CardTitle>اطلاعات اصلی</CardTitle>
              <CardDescription>
                اطلاعات اصلی سازمان خود را وارد کنید
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام سازمان</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="مثال: انجمن برنامه‌نویسان ایران"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      نام سازمان خود را وارد کنید. این نام در همه جا نمایش داده
                      می‌شود.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>یوزنیم</FormLabel>
                    <FormControl>
                      <Input placeholder="programming_inc" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>توضیحات</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="توضیحاتی درباره سازمان خود بنویسید..."
                        className="min-h-32 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      توضیحات کاملی درباره سازمان، اهداف و فعالیت‌های آن
                      بنویسید.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>دسته‌بندی</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="یک دسته‌بندی انتخاب کنید" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="technology">فناوری</SelectItem>
                          <SelectItem value="business">کسب و کار</SelectItem>
                          <SelectItem value="education">آموزشی</SelectItem>
                          <SelectItem value="design">طراحی</SelectItem>
                          <SelectItem value="marketing">بازاریابی</SelectItem>
                          <SelectItem value="other">سایر</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        دسته‌بندی سازمان به کاربران کمک می‌کند تا سازمان شما را
                        راحت‌تر پیدا کنند.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="foundedYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>سال تاسیس</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: ۱۳۹۰" {...field} />
                      </FormControl>
                      <FormDescription>
                        سال تاسیس سازمان خود را وارد کنید.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <FormLabel>لوگوی سازمان</FormLabel>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-input px-6 py-10">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                        <label
                          htmlFor="logo-upload"
                          className="relative cursor-pointer rounded-md bg-background font-semibold text-primary hover:text-primary/80"
                        >
                          <span>آپلود فایل</span>
                          <input
                            id="logo-upload"
                            name="logo-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setLogoFile(e.target.files[0]);
                              }
                            }}
                          />
                        </label>
                        <p className="pr-1">یا بکشید و رها کنید</p>
                      </div>
                      <p className="text-xs leading-5 text-muted-foreground">
                        PNG, JPG تا ۲ مگابایت
                      </p>
                      {logoFile && (
                        <p className="mt-2 text-xs text-primary">
                          {logoFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <FormLabel>تصویر کاور</FormLabel>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-input px-6 py-10">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                        <label
                          htmlFor="cover-upload"
                          className="relative cursor-pointer rounded-md bg-background font-semibold text-primary hover:text-primary/80"
                        >
                          <span>آپلود فایل</span>
                          <input
                            id="cover-upload"
                            name="cover-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setCoverFile(e.target.files[0]);
                              }
                            }}
                          />
                        </label>
                        <p className="pr-1">یا بکشید و رها کنید</p>
                      </div>
                      <p className="text-xs leading-5 text-muted-foreground">
                        PNG, JPG تا ۵ مگابایت
                      </p>
                      {coverFile && (
                        <p className="mt-2 text-xs text-primary">
                          {coverFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>اطلاعات تماس</CardTitle>
              <CardDescription>
                اطلاعات تماس سازمان خود را وارد کنید
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>شهر</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: تهران" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>شماره تماس</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: ۰۲۱۸۸۶۶۵۵۴۴" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>آدرس دقیق</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="آدرس کامل سازمان را وارد کنید..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@domain.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>وب‌سایت (اختیاری)</FormLabel>
                    <FormControl>
                      <Input placeholder="مثال: www.example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>شبکه‌های اجتماعی</CardTitle>
              <CardDescription>
                لینک شبکه‌های اجتماعی سازمان خود را وارد کنید (اختیاری)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="facebook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>فیسبوک</FormLabel>
                      <FormControl>
                        <Input placeholder="نام کاربری فیسبوک" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>توییتر</FormLabel>
                      <FormControl>
                        <Input placeholder="نام کاربری توییتر" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>اینستاگرام</FormLabel>
                      <FormControl>
                        <Input placeholder="نام کاربری اینستاگرام" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>لینکدین</FormLabel>
                      <FormControl>
                        <Input placeholder="نام کاربری لینکدین" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">انصراف</Link>
            </Button>
            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading ? "در حال ایجاد..." : "ثبت سازمان"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
