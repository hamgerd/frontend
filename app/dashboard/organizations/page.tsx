"use client";
import { useEffect, useState } from "react";

import type { Organization } from "@/models/organization";

import { SiteHeader } from "@/components/dashboard/site-header";
import OrganizationCard from "@/components/feature-parts/organization-card";
import { AppSidebar } from "@/components/shared/app-sidebar";
import CardLoading from "@/components/shared/card-loading";
import PaginationSection from "@/components/shared/pagination";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import api from "@/lib/axios";

export default function MyOrganizationPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchOrganizations = async () => {
      setIsLoading(true);
      try {
        const res = await api.get("/api/v1/users/me", {
          params: {
            page,
          },
        });
        setOrganizations(res.data.organizations);
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
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="w-full max-w-full overflow-x-hidden">
        <SiteHeader title="سازمان های من" />
        <div className="container mx-auto flex flex-col py-10">
          <div className="mx-4">
            <div className="mb-10 flex flex-col items-center gap-4 text-center"></div>
          </div>

          <div className="mx-6 mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <CardLoading />
            ) : (
              <>
                {organizations.map(organization => (
                  <OrganizationCard key={organization.public_id} organization={organization} />
                ))}
              </>
            )}
          </div>
          <PaginationSection page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
