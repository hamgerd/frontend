"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// FIXME move to validator
const eventFormSchema = z.object({
  title: z.string().min(5, {
    message: "عنوان باید حداقل ۵ کاراکتر باشد.",
  }),
  description: z.string().min(20, {
    message: "توضیحات باید حداقل ۲۰ کاراکتر باشد.",
  }),
  category: z.string({
    required_error: "لطفا یک دسته‌بندی انتخاب کنید.",
  }),
  startDate: z.string({
    required_error: "لطفا تاریخ شروع را وارد کنید.",
  }),
  endDate: z.string({
    required_error: "لطفا تاریخ پایان را وارد کنید.",
  }),
  startTime: z.string({
    required_error: "لطفا زمان شروع را وارد کنید.",
  }),
  endTime: z.string({
    required_error: "لطفا زمان پایان را وارد کنید.",
  }),
  location: z.string().min(5, {
    message: "مکان باید حداقل ۵ کاراکتر باشد.",
  }),
  address: z.string().min(10, {
    message: "آدرس باید حداقل ۱۰ کاراکتر باشد.",
  }),
  capacity: z.string().min(1, {
    message: "لطفا ظرفیت را وارد کنید.",
  }),
  price: z.string(),
  organizerName: z.string().min(3, {
    message: "نام برگزارکننده باید حداقل ۳ کاراکتر باشد.",
  }),
  organizerEmail: z.string().email({
    message: "لطفا یک ایمیل معتبر وارد کنید.",
  }),
  organizerPhone: z.string().min(10, {
    message: "شماره تلفن باید حداقل ۱۰ کاراکتر باشد.",
  }),
});

export default function NewEventPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // FIXME make request

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      location: "",
      address: "",
      capacity: "",
      price: "",
      organizerName: "",
      organizerEmail: "",
      organizerPhone: "",
    },
  });

  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
      toast({
        title: "رویداد با موفقیت ایجاد شد",
        description: "رویداد شما ایجاد شد و برای بررسی ارسال شد.",
      });
    }, 1000);
  }

  return (
    <div className="container py-10 mx-auto">
      <div className="mx-6">
        <div className="flex items-center mb-6">
          <Button asChild size="sm" variant="outline">
            <Link href="/dashboard/tickets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به داشبورد
            </Link>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">ایجاد رویداد جدید</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            اطلاعات رویداد خود را وارد کنید تا آن را برای شرکت‌کنندگان منتشر کنیم
          </p>
        </div>

        <Form {...form}>
          <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
            <Card>
              <CardHeader>
                <CardTitle>اطلاعات اصلی</CardTitle>
                <CardDescription>اطلاعات اصلی رویداد خود را وارد کنید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>عنوان رویداد</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: کنفرانس فناوری‌های نوین وب" {...field} />
                      </FormControl>
                      <FormDescription>
                        عنوان رویداد خود را وارد کنید. این عنوان در همه جا نمایش داده می‌شود.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>توضیحات</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-32 resize-none"
                          placeholder="توضیحاتی درباره رویداد خود بنویسید..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        توضیحات کاملی درباره رویداد، هدف آن و مخاطبان آن بنویسید.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="category"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>دسته‌بندی</FormLabel>
                      <Select defaultValue={field.value} onValueChange={field.onChange}>
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
                        دسته‌بندی رویداد به کاربران کمک می‌کند تا رویداد شما را راحت‌تر پیدا کنند.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>زمان و مکان</CardTitle>
                <CardDescription>زمان و مکان برگزاری رویداد را مشخص کنید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    name="startDate"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>تاریخ شروع</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="endDate"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>تاریخ پایان</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    name="startTime"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>زمان شروع</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="endTime"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>زمان پایان</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Separator />
                <FormField
                  name="location"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>مکان برگزاری</FormLabel>
                      <FormControl>
                        <Input placeholder="مثال: سالن همایش‌های برج میلاد" {...field} />
                      </FormControl>
                      <FormDescription>نام مکان برگزاری رویداد را وارد کنید.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="address"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>آدرس دقیق</FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none"
                          placeholder="آدرس کامل محل برگزاری رویداد را وارد کنید..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            {/* //  FIXME make ticket section as a list of tickets with delete and add button also with */}
            <Card>
              <CardHeader>
                <CardTitle>ظرفیت و قیمت</CardTitle>
                <CardDescription>تعداد شرکت‌کنندگان و قیمت بلیت را مشخص کنید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    name="capacity"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ظرفیت</FormLabel>
                        <FormControl>
                          <Input
                            min="1"
                            type="number"
                            placeholder="تعداد شرکت‌کنندگان"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          حداکثر تعداد شرکت‌کنندگان در رویداد را وارد کنید.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="price"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>قیمت (تومان)</FormLabel>
                        <FormControl>
                          <Input min="0" type="number" placeholder="مثال: 100000" {...field} />
                        </FormControl>
                        <FormDescription>
                          قیمت بلیت رویداد را وارد کنید. اگر رویداد رایگان است، عدد ۰ را وارد کنید.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>اطلاعات برگزارکننده</CardTitle>
                <CardDescription>اطلاعات تماس برگزارکننده را وارد کنید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  name="organizerName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام برگزارکننده</FormLabel>
                      <FormControl>
                        <Input placeholder="نام شخص یا سازمان برگزارکننده" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    name="organizerEmail"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ایمیل</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="example@domain.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="organizerPhone"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>شماره تماس</FormLabel>
                        <FormControl>
                          <Input placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" variant="outline">
                <Link href="/dashboard/tickets">انصراف</Link>
              </Button>
              <Button size="lg" disabled={isLoading} type="submit">
                {isLoading ? "در حال ایجاد..." : "ایجاد رویداد"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
