"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import api from "@/lib/axios";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Organization } from "@/models/organization";

export default function OrganizationPage({
  params,
}: {
  params: { id: string };
}) {
  const [organizationDetails, setOrganizationDetails] =
    useState<Organization>();

  useEffect(() => {
    const fetchOrganizationDetails = async () => {
      try {
        const response = await api.get(`/api/v1/organization/${params.id}/`);
        setOrganizationDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrganizationDetails();
  }, [params?.id]);
  return (
    <div className="py-10 flex mx-auto" dir="rtl">
      <div className="flex mx-4 flex-col  ">
        <div className="flex items-center mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/organizations">
              <ArrowLeft className="mr-2 h-4 w-4" />
              بازگشت به سازمان‌ها
            </Link>
          </Button>
        </div>

        {/* Cover Image and Logo */}
        <div className="relative mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={organizationDetails?.coverImage || "/placeholder.svg"}
              alt={organizationDetails?.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-12 right-8 h-24 w-24 rounded-full overflow-hidden border-4 border-background bg-background">
            <Image
              src={organizationDetails?.logo || "/placeholder.svg"}
              alt={organizationDetails?.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">
                {organizationDetails?.name}
              </h1>
              {organizationDetails?.verified && (
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  تایید شده
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{organizationDetails?.address}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>تاسیس: {organizationDetails?.foundedYear}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>
                  {organizationDetails?.memberCount.toLocaleString("fa-IR")} عضو
                </span>
              </div>
            </div>

            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">درباره</TabsTrigger>
                <TabsTrigger value="events">رویدادها</TabsTrigger>
                <TabsTrigger value="team">تیم</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-6">
                <p className="mb-6 whitespace-pre-line">
                  {organizationDetails?.description}
                </p>

                <h3 className="text-lg font-bold mb-2">آدرس</h3>
                <p className="mb-6">{organizationDetails?.address}</p>

                <div className="rounded-lg overflow-hidden h-64 bg-muted">
                  {/* Google Map would go here in a real application */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    نقشه محل سازمان
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="events" className="mt-6">
                <h3 className="text-lg font-bold mb-4">رویدادهای آینده</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {organizationDetails?.upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="relative h-40">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2 line-clamp-1">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                          <Calendar className="h-3 w-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                          <Clock className="h-3 w-3" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full mt-3"
                        >
                          <Link href={`/events/${event.id}`}>
                            مشاهده جزئیات
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="text-lg font-bold mb-4">رویدادهای گذشته</h3>
                <div className="space-y-4">
                  {organizationDetails?.pastEvents.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-bold">{event.title}</h4>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{event.attendees} شرکت‌کننده</span>
                            </div>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/events/${event.id}`}>مشاهده</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="team" className="mt-6">
                <h3 className="text-lg font-bold mb-4">تیم مدیریت</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {organizationDetails?.team.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 flex flex-col items-center">
                        <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-lg">{member.name}</h4>
                        <p className="text-muted-foreground">{member.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>اطلاعات تماس</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {organizationDetails?.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{organizationDetails?.phone}</span>
                  </div>
                )}
                {organizationDetails?.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{organizationDetails?.email}</span>
                  </div>
                )}
                {organizationDetails?.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`https://${organizationDetails?.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {organizationDetails?.website}
                    </a>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between">
                  {organizationDetails?.socialMedia?.facebook && (
                    <a
                      href={`https://facebook.com/${organizationDetails?.socialMedia?.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">فیسبوک</span>
                    </a>
                  )}
                  {organizationDetails?.socialMedia?.twitter && (
                    <a
                      href={`https://twitter.com/${organizationDetails.socialMedia.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">توییتر</span>
                    </a>
                  )}
                  {organizationDetails?.socialMedia.instagram && (
                    <a
                      href={`https://instagram.com/${organizationDetails.socialMedia.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">اینستاگرام</span>
                    </a>
                  )}
                  {organizationDetails?.socialMedia.linkedin && (
                    <a
                      href={`https://linkedin.com/company/${organizationDetails.socialMedia.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">لینکدین</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>آمار</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between py-2">
                  <span className="font-medium">تعداد اعضا:</span>
                  <span>
                    {organizationDetails?.memberCount.toLocaleString("fa-IR")}{" "}
                    نفر
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">تعداد رویدادها:</span>
                  <span>{organizationDetails?.eventCount} رویداد</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">سال تاسیس:</span>
                  <span>{organizationDetails?.foundedYear}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">دسته‌بندی:</span>
                  <span>{organizationDetails?.category}</span>
                </div>
                <Button className="w-full mt-4">عضویت در سازمان</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
