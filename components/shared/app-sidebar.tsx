"use client";

import type * as React from "react";
import {
  CalendarIcon,
  CreditCardIcon,
  HeartIcon,
  MessageSquareIcon,
  SettingsIcon,
  TicketIcon,
  UserIcon,
  BellIcon,
  ShareIcon,
  LockIcon,
  ActivityIcon,
  BookmarkIcon,
  UsersIcon,
  HomeIcon,
} from "lucide-react";
import Link from "next/link";

import { NavDocuments } from "@/components/nav/nav-documents";
import { NavMain } from "@/components/nav/nav-main";
import { NavSecondary } from "@/components/nav/nav-secondary";
import { NavUser } from "@/components/nav/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  // user: {
  //   name: "علی احمدی",
  //   email: "ali@example.com",
  //   avatar: "/placeholder.svg?height=32&width=32",
  // },
  navMain: [
    // {
    //   title: "داشبورد",
    //   url: "/dashboard",
    //   icon: HomeIcon,
    // },
    {
      title: " خانه",
      url: "/",
      icon: CreditCardIcon,
    },
    {
      title: "بلیت‌های من",
      url: "/dashboard/tickets",
      icon: TicketIcon,
    },
    // {
    //   title: "رویدادهای نشان‌شده",
    //   url: "/dashboard/bookmarks",
    //   icon: BookmarkIcon,
    // },
    // {
    //   title: "علاقه‌مندی‌های من",
    //   url: "/dashboard/favorites",
    //   icon: HeartIcon,
    // },
    // {
    //   title: "تقویم من",
    //   url: "/dashboard/calendar",
    //   icon: CalendarIcon,
    // },
  ],
  navClouds: [
    {
      title: "فعالیت‌های من",
      icon: ActivityIcon,
      isActive: true,
      url: "/dashboard/activities",
      items: [
        {
          title: "خریدهای اخیر",
          url: "/dashboard/activities/recent",
        },
        {
          title: "تاریخچه",
          url: "/dashboard/activities/history",
        },
      ],
    },
    {
      title: "صندوق پیام‌ها",
      icon: MessageSquareIcon,
      url: "/dashboard/messages",
      items: [
        {
          title: "پیام‌های جدید",
          url: "/dashboard/messages/new",
        },
        {
          title: "آرشیو",
          url: "/dashboard/messages/archive",
        },
      ],
    },
    {
      title: "رویدادهای من",
      icon: CalendarIcon,
      url: "/dashboard/my-events",
      items: [
        {
          title: "رویدادهای آینده",
          url: "/dashboard/my-events/upcoming",
        },
        {
          title: "رویدادهای گذشته",
          url: "/dashboard/my-events/past",
        },
      ],
    },
  ],
  navSecondary: [
    // {
    //   title: "حساب کاربری",
    //   url: "/dashboard/profile",
    //   icon: UserIcon,
    // },
    // {
    //   title: "تغییر رمز عبور",
    //   url: "/dashboard/change-password",
    //   icon: LockIcon,
    // },
    // {
    //   title: "تنظیمات اعلان‌ها",
    //   url: "/dashboard/notifications",
    //   icon: BellIcon,
    // },
    // {
    //   title: "اتصال شبکه‌های اجتماعی",
    //   url: "/dashboard/social-connect",
    //   icon: ShareIcon,
    // },
  ],
  documents: [
    {
      name: "معرفی ایونت به دوستان",
      url: "/dashboard/referral",
      icon: UsersIcon,
    },
    {
      name: "تنظیمات",
      url: "/dashboard/settings",
      icon: SettingsIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" side="right" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <Link href="/">
                <span className="text-base font-semibold">همگرد</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
