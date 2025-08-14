"use client";

import Cookies from "js-cookie";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/const/site";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/axios";

export default function Header() {
  const { setTheme } = useTheme();
  const { isAuthenticated, setAuthenticated } = useAuth();
  const [profile, setProfile] = useState<{ image?: string; email?: string }>({});

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isAuthenticated) return;
      if (Cookies.get("image")) {
        setProfile({
          image: Cookies.get("image"),
          email: Cookies.get("email"),
        });
        return;
      }
      try {
        const res = await api.get("/api/v1/users/me/");
        Cookies.set("image", res.data.image);
        Cookies.set("email", res.data.email);
        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching user data", err);
      }
    };
    fetchUserData();
  }, [isAuthenticated]);

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 flex w-full items-center border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between py-4 lg:space-x-4 lg:px-6">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="md:hidden" variant="ghost">
                <Menu className="h-5 w-5" />
                <span className="sr-only">منو</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                {siteConfig.mainNav.map(item => (
                  <Link
                    className="flex w-full items-center py-2 text-sm font-medium"
                    href={item.href}
                    key={item.title}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link className="flex items-center space-x-2" href="/">
            <Image
              height={60}
              width={60}
              alt="logo"
              className="ml-2 dark:invert"
              src="/hamgerd-logo.svg"
            />
          </Link>
          <nav className="hidden gap-8 px-6 md:flex">
            {siteConfig.mainNav.map(item => (
              <Link
                className="text-muted-foreground hover:text-foreground flex items-center text-sm font-medium transition-colors"
                href={item.href}
                key={item.title}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 px-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">تغییر تم</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>روشن</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>تاریک</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>سیستم</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <a href="/dashboard/tickets">
                  <Avatar>
                    <AvatarImage src={profile.image} />
                    <AvatarFallback>{profile.email?.split("@")[0]?.slice(0, 4)}</AvatarFallback>
                  </Avatar>
                </a>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/dashboard/tickets">
                  <DropdownMenuLabel className="cursor-pointer text-end">داشبورد</DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  dir="rtl"
                  onClick={() => {
                    setAuthenticated(false);
                    Cookies.remove("token");
                    Cookies.remove("refreshToken");
                    window.location.reload();
                  }}
                >
                  خروج
                </DropdownMenuItem>
                <Link href="/dashboard/tickets">
                  <DropdownMenuItem dir="rtl">بلیط های من</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button size="default" className="" variant="outline">
                  ورود
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="default">ثبت نام</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
