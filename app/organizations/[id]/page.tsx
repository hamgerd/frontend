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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { useParams } from "next/navigation";
import { Organization } from "@/models/organization";

export default function OrganizationPage() {
  const params = useParams();
  const [organizationDetails, setOrganizationDetails] =
    useState<Organization>();
  const organization = {
    name: "انجمن برنامه‌نویسان ایران",
    description:
      "انجمن برنامه‌نویسان ایران یک سازمان غیرانتفاعی است که با هدف توسعه دانش برنامه‌نویسی و فناوری‌های مرتبط در ایران فعالیت می‌کند.",
    longDescription:
      "انجمن برنامه‌نویسان ایران یک سازمان غیرانتفاعی است که با هدف توسعه دانش برنامه‌نویسی و فناوری‌های مرتبط در ایران فعالیت می‌کند. این انجمن در سال ۱۳۹۰ تاسیس شده و تاکنون بیش از ۱۰۰ رویداد آموزشی و تخصصی در زمینه‌های مختلف برنامه‌نویسی و فناوری اطلاعات برگزار کرده است. انجمن برنامه‌نویسان ایران با همکاری دانشگاه‌ها، شرکت‌های فناوری و متخصصان حوزه IT، سعی در ارتقای سطح دانش و مهارت‌های برنامه‌نویسی در کشور دارد. این انجمن همچنین با برگزاری دوره‌های آموزشی، کارگاه‌ها، سمینارها و همایش‌های تخصصی، فرصتی برای یادگیری و تبادل تجربیات بین برنامه‌نویسان فراهم می‌کند.",
    logo: "/placeholder.svg?height=200&width=200",
    coverImage: "/placeholder.svg?height=400&width=1200",
    location: "تهران",
    address:
      "تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج نگار، طبقه ۸، واحد ۸۰۴",
    phone: "۰۲۱-۸۸۶۶۵۵۴۴",
    email: "info@iranprogrammers.org",
    website: "www.iranprogrammers.org",
    socialMedia: {
      facebook: "iranprogrammers",
      twitter: "iranprogrammers",
      instagram: "iranprogrammers",
      linkedin: "iranprogrammers",
    },
    foundedYear: "۱۳۹۰",
    memberCount: 1500,
    eventCount: 12,
    category: "فناوری",
    verified: true,
    team: [
      {
        name: "علی محمدی",
        role: "مدیرعامل",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "سارا احمدی",
        role: "مدیر فنی",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "محمد حسینی",
        role: "مدیر آموزش",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    upcomingEvents: [
      {
        id: 1,
        title: "کنفرانس فناوری‌های نوین وب",
        date: "۱۵ مرداد ۱۴۰۲",
        time: "۰۹:۰۰ - ۱۷:۰۰",
        location: "تهران، سالن همایش‌های برج میلاد",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        title: "کارگاه آموزشی هوش مصنوعی",
        date: "۲۰ مرداد ۱۴۰۲",
        time: "۱۴:۰۰ - ۱۸:۰۰",
        location: "آنلاین",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        title: "دوره آموزشی برنامه‌نویسی موبایل",
        date: "۵ شهریور ۱۴۰۲",
        time: "۱۰:۰۰ - ۱۶:۰۰",
        location: "تهران، دانشگاه صنعتی شریف",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    pastEvents: [
      {
        id: 4,
        title: "همایش بزرگ برنامه‌نویسان",
        date: "۱۰ اردیبهشت ۱۴۰۲",
        location: "تهران، دانشگاه تهران",
        attendees: 300,
      },
      {
        id: 5,
        title: "کارگاه امنیت وب",
        date: "۲۰ فروردین ۱۴۰۲",
        location: "آنلاین",
        attendees: 150,
      },
      {
        id: 6,
        title: "دوره آموزشی فرانت‌اند",
        date: "۵ اسفند ۱۴۰۱",
        location: "تهران، مرکز نوآوری",
        attendees: 80,
      },
    ],
  };
  useEffect(() => {
    const fetchOrganizationDetails = async () => {
      const response = await api.get(`api/v1/organization/${params.id}`);
      setOrganizationDetails(response.data);
    };

    fetchOrganizationDetails();
  }, [params.id]);
  return (
    <div className="container py-10 flex flex-col mx-auto">
      <div>
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
          <div className="relative h-64 rounded-lg overflow-hidden"></div>
          <div className="absolute -bottom-12 right-8 h-24 w-24 rounded-full overflow-hidden border-4 border-background bg-background">
            <Image
              src={organization.logo || "/placeholder.svg"}
              alt={organization.name}
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
              {organization.verified && (
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
                <span>تاسیس: {organization.foundedYear}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>
                  {organization.memberCount.toLocaleString("fa-IR")} عضو
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
                  {organization.upcomingEvents.map((event) => (
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
                  {organization.pastEvents.map((event) => (
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
                  {organization.team.map((member, index) => (
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
                {organization.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{organization.phone}</span>
                  </div>
                )}
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
                      href={`https://${organizationDetails?.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {organization.website}
                    </a>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between">
                  {organization.socialMedia.facebook && (
                    <a
                      href={`https://facebook.com/${organization.socialMedia.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">فیسبوک</span>
                    </a>
                  )}
                  {organization.socialMedia.twitter && (
                    <a
                      href={`https://twitter.com/${organization.socialMedia.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">توییتر</span>
                    </a>
                  )}
                  {organization.socialMedia.instagram && (
                    <a
                      href={`https://instagram.com/${organization.socialMedia.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">اینستاگرام</span>
                    </a>
                  )}
                  {organization.socialMedia.linkedin && (
                    <a
                      href={`https://linkedin.com/company/${organization.socialMedia.linkedin}`}
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
                    {organization.memberCount.toLocaleString("fa-IR")} نفر
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">تعداد رویدادها:</span>
                  <span>{organization.eventCount} رویداد</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">سال تاسیس:</span>
                  <span>{organization.foundedYear}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">دسته‌بندی:</span>
                  <span>{organization.category}</span>
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
