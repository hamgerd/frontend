/* eslint-disable max-lines-per-function */
"use client";
import type { UseFormReturn } from "react-hook-form";
import type * as z from "zod";

import { Upload } from "lucide-react";
import Link from "next/link";

import type { newOrganizationFormSchema } from "@/validator/new-organization-schema";

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
import { Textarea } from "@/components/ui/textarea";

interface NewOrganizationFormProps {
  form: UseFormReturn<z.infer<typeof newOrganizationFormSchema>>;
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof newOrganizationFormSchema>) => void;
  setLogoFile: (file: File) => void;
  logoFile: File | null;
}
export default function NewOrganizationForm({
  form,
  isLoading,
  onSubmit,
  setLogoFile,
  logoFile,
}: NewOrganizationFormProps) {
  return (
    <Form {...form}>
      <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>اطلاعات اصلی</CardTitle>
            <CardDescription>اطلاعات اصلی سازمان خود را وارد کنید</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام سازمان</FormLabel>
                  <FormControl>
                    <Input placeholder="مثال: انجمن برنامه‌نویسان ایران" {...field} />
                  </FormControl>
                  <FormDescription>
                    نام سازمان خود را وارد کنید. این نام در همه جا نمایش داده می‌شود.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="username"
              control={form.control}
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
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-32 resize-none"
                      placeholder="توضیحاتی درباره سازمان خود بنویسید..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    توضیحات کاملی درباره سازمان، اهداف و فعالیت‌های آن بنویسید.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="gap-6">
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
                      دسته‌بندی سازمان به کاربران کمک می‌کند تا سازمان شما را راحت‌تر پیدا کنند.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" gap-6">
              <div>
                <FormLabel>لوگوی سازمان</FormLabel>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-input px-6 py-10">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                      <label
                        className="relative cursor-pointer rounded-md bg-background font-semibold text-primary hover:text-primary/80"
                        htmlFor="logo-upload"
                      >
                        <span>آپلود فایل</span>
                        <input
                          accept=".jpg,.jpeg,.png"
                          className="sr-only"
                          id="logo-upload"
                          name="logo-upload"
                          type="file"
                          onChange={e => {
                            if (e.target.files && e.target.files[0]) {
                              setLogoFile(e.target.files[0]);
                            }
                          }}
                        />
                      </label>
                      <p className="pr-1">یا بکشید و رها کنید</p>
                    </div>
                    <p className="text-xs leading-5 text-muted-foreground">PNG, JPG تا ۱ مگابایت</p>
                    {logoFile && <p className="mt-2 text-xs text-primary">{logoFile.name}</p>}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>اطلاعات تماس</CardTitle>
            <CardDescription>اطلاعات تماس سازمان خود را وارد کنید</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                name="location"
                control={form.control}
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
                name="phone"
                control={form.control}
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
              name="address"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>آدرس دقیق</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="آدرس کامل سازمان را وارد کنید..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
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
              name="website"
              control={form.control}
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
            <div className="flex flex-col">
              <FormField
                name="telegram"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تلگرام</FormLabel>
                    <FormControl>
                      <Input placeholder="نام کاربری تلگرام" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                name="instagram"
                control={form.control}
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
                name="linkedin"
                control={form.control}
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
          <Button asChild size="lg" variant="outline">
            <Link href="/dashboard/tickets">انصراف</Link>
          </Button>
          <Button size="lg" disabled={isLoading} type="submit">
            {isLoading ? "در حال ایجاد..." : "ثبت سازمان"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
