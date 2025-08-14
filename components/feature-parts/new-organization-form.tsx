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
                    <Input
                      className="my-1"
                      placeholder="مثال: انجمن برنامه‌نویسان ایران"
                      {...field}
                    />
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
                    <Input className="my-1" placeholder="programming_inc" {...field} />
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
                      className="my-1 min-h-32 resize-none"
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
              <div>
                <FormLabel>لوگوی سازمان</FormLabel>
                <div className="border-input mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10">
                  <div className="text-center">
                    <Upload className="text-muted-foreground mx-auto h-12 w-12" />
                    <div className="text-muted-foreground mt-4 flex text-sm leading-6">
                      <label
                        className="bg-background text-primary hover:text-primary/80 relative cursor-pointer rounded-md font-semibold"
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
                    </div>
                    <p className="text-muted-foreground text-xs leading-5">PNG, JPG تا ۱ مگابایت</p>
                    {logoFile && <p className="text-primary mt-2 text-xs">{logoFile.name}</p>}
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
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>شماره تماس</FormLabel>
                  <FormControl>
                    <Input className="my-1" placeholder="مثال: ۰۲۱۸۸۶۶۵۵۴۴" {...field} />
                  </FormControl>
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
                      className="my-1 resize-none"
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
                    <Input
                      className="my-1"
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
              name="website"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>وب‌سایت (اختیاری)</FormLabel>
                  <FormControl>
                    <Input className="my-1" placeholder="مثال: example.com" {...field} />
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
                      <Input className="my-1" placeholder="لینک تلگرام" {...field} />
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
                      <Input className="my-1" placeholder="لینک اینستاگرام" {...field} />
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
                      <Input className="my-1" placeholder="لینک  لینکدین" {...field} />
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
