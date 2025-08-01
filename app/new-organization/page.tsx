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
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof newOrganizationFormSchema>>({
    resolver: zodResolver(newOrganizationFormSchema),
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
  async function onSubmit(values: z.infer<typeof newOrganizationFormSchema>) {
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
          coverFile={coverFile}
          form={form}
          isLoading={isLoading}
          logoFile={logoFile}
          onSubmit={onSubmit}
          setCoverFile={setCoverFile}
          setLogoFile={setLogoFile}
        />
      </div>
    </div>
  );
}
