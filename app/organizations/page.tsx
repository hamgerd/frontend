"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import type { Organization } from "@/models/organization";

import OrganizationCard from "@/components/feature-parts/organization-card";
import CardLoading from "@/components/shared/card-loading";
import CreatePromptCard from "@/components/shared/create-prompt-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/lib/axios";

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrganizations = async () => {
      setIsLoading(true);
      try {
        const res = await api.get("/api/v1/organization/");
        setOrganizations(res.data.results);
      } catch (err) {
        console.log(`error massage is: ${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  return (
    <div className="container flex mx-auto flex-col py-10">
      <div className="mx-4">
        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">سازمان‌ها</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            با سازمان‌های برگزارکننده رویدادها آشنا شوید و در رویدادهای آن‌ها شرکت کنید
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="md:col-span-2 relative">
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input className="pr-10" placeholder="جستجوی سازمان..." />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه</SelectItem>
                <SelectItem value="technology">فناوری</SelectItem>
                <SelectItem value="business">کسب و کار</SelectItem>
                <SelectItem value="education">آموزشی</SelectItem>
                <SelectItem value="design">طراحی</SelectItem>
                <SelectItem value="marketing">بازاریابی</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">جدیدترین</SelectItem>
                <SelectItem value="popular">محبوب‌ترین</SelectItem>
                <SelectItem value="mostEvents">بیشترین رویداد</SelectItem>
                <SelectItem value="mostMembers">بیشترین اعضا</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Organizations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 mx-6">
        {isLoading ? (
          <CardLoading />
        ) : (
          organizations.map((organization, index) => (
            <OrganizationCard key={index} organization={organization} />
          ))
        )}
      </div>

      {/* <div className="flex justify-center my-8">
        <div className="flex space-x-1 space-x-reverse">
          <Button variant="outline" size="icon">
            <span className="sr-only">صفحه قبل</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
          <Button variant="outline" size="sm">
            ۱
          </Button>
          <Button variant="outline" size="sm" className="bg-muted">
            ۲
          </Button>
          <Button variant="outline" size="sm">
            ۳
          </Button>
          <Button variant="outline" size="icon">
            <span className="sr-only">صفحه بعد</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
        </div>
      </div> */}
      <CreatePromptCard
        title="می‌خواهید سازمان خود را ثبت کنید؟"
        buttonHref="/new-organization"
        buttonText="ایجاد سازمان جدید"
        description="به سادگی می‌توانید سازمان خود را ایجاد کرده و مدیریت کنید"
      />
    </div>
  );
}
