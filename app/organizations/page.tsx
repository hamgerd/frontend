"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Organization } from "@/models/organization";

import OrganizationCard from "@/components/feature-parts/organization-card";
import CardLoading from "@/components/shared/card-loading";
import CreatePromptCard from "@/components/shared/create-prompt-card";
import PaginationSection from "@/components/shared/pagination";
import Searchbar from "@/components/shared/searchbar";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchOrganizations = async () => {
      setIsLoading(true);
      try {
        const res = await api.get("/api/v1/organization/", {
          params: {
            page,
          },
        });
        setOrganizations(res.data.results);
        setTotalPages(Math.ceil(res.data.count / 24));
      } catch (error) {
        console.log(`error massage is: ${String(error)}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrganizations();
  }, [page, totalPages]);

  return (
    <div className="container mx-auto flex flex-col py-10">
      <div className="mx-4">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">سازمان‌ها</h1>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            با سازمان‌های برگزارکننده رویدادها آشنا شوید و در رویدادهای آن‌ها شرکت کنید
          </p>
        </div>
        <Searchbar type="organization" />
      </div>
      {/* Organizations Grid */}
      {isLoading ? (
        <div className="mx-6 mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CardLoading />
        </div>
      ) : organizations.length > 0 ? (
        <div>
          <div className="mx-6 mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map(organization => (
              <OrganizationCard key={organization.public_id} organization={organization} />
            ))}
          </div>
          <PaginationSection page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground mb-4 text-xl">هیچ سازمانی یافت نشد</p>
          <Button asChild>
            <Link href="/new-organization">ایجاد سازمان جدید</Link>
          </Button>
        </div>
      )}
      <CreatePromptCard
        title="می‌خواهید سازمان خود را ثبت کنید؟"
        buttonHref="/new-organization"
        buttonText="ایجاد سازمان جدید"
        description="به سادگی می‌توانید سازمان خود را ایجاد کرده و مدیریت کنید"
      />
    </div>
  );
}
