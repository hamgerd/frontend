"use client"

import Link from "next/link"
import { CalendarDays, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"

export default function Header() {
  const { setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">منو</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                {siteConfig.mainNav.map((item, index) => (
                  <Link key={index} href={item.href} className="flex w-full items-center py-2 text-sm font-medium">
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <CalendarDays className="h-6 w-6 ml-2" />
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {siteConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">تغییر تم</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>روشن</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>تاریک</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>سیستم</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/login">
            <Button variant="outline" size="sm" className="ml-2">
              ورود
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">ثبت نام</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
