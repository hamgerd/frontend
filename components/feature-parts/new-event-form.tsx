/* eslint-disable max-lines-per-function */
import type { UseFormReturn } from "react-hook-form";
import type * as z from "zod";

import Link from "next/link";

import type { newEventSchema } from "@/validator/new-event-schema";

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

interface NewEventFormProps {
  form: UseFormReturn<z.infer<typeof newEventSchema>>;
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof newEventSchema>) => void;
}

export default function NewEventForm({ form, isLoading, onSubmit }: NewEventFormProps) {
  return (
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
                      <Input min="1" type="number" placeholder="تعداد شرکت‌کنندگان" {...field} />
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
  );
}
