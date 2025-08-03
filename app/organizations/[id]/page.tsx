"use client";
import { ArrowLeft, Globe, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import type { Organization } from "@/models/organization";

import EventsOfOrganization from "@/components/feature-parts/events-of-organization";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import api from "@/lib/axios";

export default function OrganizationPage() {
  const params = useParams();
  const [organizationDetails, setOrganizationDetails] = useState<Organization>();
  const [events, setEvents] = useState();
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const fetchOrganizationDetails = async () => {
      const response = await api.get(`api/v1/organization/${String(params.id)}`);
      setOrganizationDetails(response.data);
    };

    fetchOrganizationDetails();
  }, [params.id]);

  useEffect(() => {
    setIsloading(true);
    const fetchOrganizationEvents = async () => {
      try {
        const res = await api.get("api/v1/events", {
          params: {
            organization_username: params.id,
          },
        });
        setEvents(res.data.results);
        console.log(res.data);
      } catch (error) {
        console.log("errro message is :", error);
      } finally {
        setIsloading(false);
      }
    };
    fetchOrganizationEvents();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-100 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-lg">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="mx-10 flex">
      <div className="container mx-auto py-10 flex flex-col">
        <div>
          <div className="flex items-center mb-6">
            <Button asChild size="sm" variant="outline">
              <Link href="/organizations">
                <ArrowLeft className="mr-2 h-4 w-4" />
                بازگشت به سازمان‌ها
              </Link>
            </Button>
          </div>

          {/* Cover Image and Logo */}
          <div className="relative mb-8">
            <div className="relative h-20 rounded-lg overflow-hidden"></div>
            <div className="absolute -bottom-12 right-8 h-24 w-24 rounded-full overflow-hidden border-4 border-background bg-background">
              <Image
                fill
                alt=""
                className="object-cover"
                src={organizationDetails?.logo ?? "/placeholder.svg?height=200&width=200"}
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold">{organizationDetails?.name}</h1>
                <Badge className="bg-primary/10 text-primary" variant="outline">
                  تایید شده
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{organizationDetails?.address}</span>
                </div>
              </div>

              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="about">درباره</TabsTrigger>
                  <TabsTrigger value="events">رویدادها</TabsTrigger>
                </TabsList>
                <TabsContent dir="rtl" className="mt-6" value="about">
                  <p className="mb-6 whitespace-pre-line">{organizationDetails?.description}</p>

                  <h3 className="text-lg font-bold mb-2">آدرس: {organizationDetails?.address}</h3>
                  <div className="rounded-lg overflow-hidden h-64 bg-muted">
                    {/* Map place */}
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      نقشه محل سازمان
                    </div>
                  </div>
                </TabsContent>
                <TabsContent className="mt-6" value="events">
                  <EventsOfOrganization events={events} />
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>اطلاعات تماس</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {organizationDetails?.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{organizationDetails.email}</span>
                    </div>
                  )}
                  {organizationDetails?.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <a
                        className="hover:underline"
                        href={`https://${organizationDetails.website}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {organizationDetails.website}
                      </a>
                    </div>
                  )}
                  <Separator />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
