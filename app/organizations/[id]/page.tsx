/* eslint-disable max-lines-per-function */
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
      <div className="bg-opacity-50 fixed inset-0 z-100 flex items-center justify-center bg-black">
        <div className="text-lg text-white">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="mx-10 flex">
      <div className="container mx-auto flex flex-col py-10">
        <div>
          <div className="mb-6 flex items-center">
            <Button asChild size="sm" variant="outline">
              <Link href="/organizations">
                <ArrowLeft className="mr-2 h-4 w-4" />
                بازگشت به سازمان‌ها
              </Link>
            </Button>
          </div>

          {/* Cover Image and Logo */}
          <div className="relative mb-8">
            <div className="relative h-20 overflow-hidden rounded-lg"></div>
            <div className="border-background bg-background absolute right-8 -bottom-12 h-24 w-24 overflow-hidden rounded-full border-4">
              <Image
                fill
                alt=""
                className="object-cover"
                src={organizationDetails?.logo ?? "/placeholder.svg?height=200&width=200"}
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="mb-2 flex items-center gap-2">
                <h1 className="text-3xl font-bold">{organizationDetails?.name}</h1>
                <Badge className="bg-primary/10 text-primary" variant="outline">
                  تایید شده
                </Badge>
              </div>
              <div className="mb-6 flex flex-wrap gap-4">
                <div className="text-muted-foreground flex items-center gap-2">
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

                  <h3 className="mb-2 text-lg font-bold">آدرس: {organizationDetails?.address}</h3>
                  <div className="bg-muted h-64 overflow-hidden rounded-lg">
                    {/* Map place */}
                    <div className="text-muted-foreground flex h-full w-full items-center justify-center">
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
                      <Mail className="text-muted-foreground h-4 w-4" />
                      <span>{organizationDetails.email}</span>
                    </div>
                  )}
                  {organizationDetails?.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="text-muted-foreground h-4 w-4" />
                      <a
                        className="hover:underline"
                        href={organizationDetails.website}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {organizationDetails.website}
                      </a>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between">
                    {organizationDetails?.social_links?.map(socialMedia => {
                      if (socialMedia.platform === "tg") {
                        return (
                          <a
                            className="text-muted-foreground hover:text-foreground"
                            href={socialMedia.url}
                            key={socialMedia.platform}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <Image
                              height="32"
                              width="32"
                              alt="telegram link"
                              src="https://cdn.simpleicons.org/telegram"
                            />
                            <span className="sr-only">تلگرام</span>
                          </a>
                        );
                      }

                      if (socialMedia.platform === "ig") {
                        return (
                          <a
                            className="text-muted-foreground hover:text-foreground"
                            href={socialMedia.url}
                            key={socialMedia.platform}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <Image
                              height="32"
                              width="32"
                              alt="instagram link"
                              src="https://cdn.simpleicons.org/instagram"
                            />{" "}
                            <span className="sr-only">اینستاگرام</span>
                          </a>
                        );
                      }

                      if (socialMedia.platform === "in") {
                        return (
                          <a
                            className="text-muted-foreground hover:text-foreground"
                            href={socialMedia.url}
                            key={socialMedia.platform}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <Image
                              height="32"
                              width="32"
                              alt="linkdin image"
                              src="https://cdn.simpleicons.org/npm"
                            />{" "}
                            <span className="sr-only">لینکدین</span>
                          </a>
                        );
                      }

                      return null;
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
