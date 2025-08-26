"use client";

import type * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import NewOrganizationForm from "@/components/feature-parts/new-organization-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/axios";
import { newOrganizationFormSchema } from "@/validator/new-organization-schema";

export default function NewOrganizationPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
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
    try {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("username", values.username);
      formData.append("email", values.email || "");
      formData.append("description", values.description || "");
      formData.append("address", values.address || "");
      formData.append("phone", values.phone || "");
      formData.append("location", values.location || "");
      formData.append("category", values.category);
      if (values.website && values.website.trim() !== "") {
        formData.append("website", `https://www.${values.website}`);
      }
      if (logoFile) {
        formData.append("logo", logoFile);
      }
      const socialMedia = [
        { platform: "tg", url: values.telegram },
        { platform: "ig", url: values.instagram },
        { platform: "in", url: values.linkedin },
      ].filter(s => s.url && s.url.trim() !== "");

      formData.append("social_links", JSON.stringify(socialMedia));

      await api.post("/api/v1/organization/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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
  if (!isAuthenticated) {
    router.push("/login");
  }
  return (
    <div className="mx-5">
      <div className="container mx-auto py-10">
        <div className="mb-6 flex items-center">
          <Button asChild size="sm" variant="outline">
            <Link href="/dashboard/tickets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به داشبورد
            </Link>
          </Button>
        </div>

        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">ثبت سازمان جدید</h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
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
