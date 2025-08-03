"use client";

import type * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import NewOrganizationForm from "@/components/feature-parts/new-organization-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/axios";
import { newOrganizationFormSchema } from "@/validator/new-organization-schema";

export default function NewOrganizationPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof newOrganizationFormSchema>>({
    resolver: zodResolver(newOrganizationFormSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      location: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      telegram: "",
      instagram: "",
      linkedin: "",
    },
  });
  async function onSubmit(values: z.infer<typeof newOrganizationFormSchema>) {
    setIsLoading(true);
    console.log(values);
    try {
      await api.post(
        "/api/v1/organization/",
        {
          name: values.name,
          username: values.username,
          email: values.email,
          description: values.description,
          address: values.address,
          website: values.website,
          logoFile,
          phone: values.phone,
          location: values.location,
          linkedin: values.linkedin,
          instagram: values.instagram,
          category: values.category,
          telegram: values.telegram,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Logo file:", logoFile);

      toast({
        title: "سازمان با موفقیت ایجاد شد",
        description: "سازمان شما ایجاد شد و برای بررسی ارسال شد.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.log("Form errors:", form.formState.errors);
      console.error("Error submitting organization:", error);
      toast({
        title: "خطا در ایجاد سازمان",
        description: "مشکلی در ایجاد سازمان به وجود آمد. لطفا دوباره تلاش کنید.",
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
    <div className="mx-5">
      <div className="container mx-auto py-10">
        <div className="flex items-center mb-6">
          <Button asChild size="sm" variant="outline">
            <Link href="/dashboard/tickets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به داشبورد
            </Link>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">ثبت سازمان جدید</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            اطلاعات سازمان خود را وارد کنید تا آن را برای کاربران منتشر کنیم
          </p>
          <NewOrganizationForm
            form={form}
            isLoading={isLoading}
            logoFile={logoFile}
            onSubmit={onSubmit}
            setLogoFile={setLogoFile}
          />
        </div>
      </div>
    </div>
  );
}
