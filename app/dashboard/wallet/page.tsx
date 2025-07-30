import { ArrowDownIcon, ArrowUpIcon, PlusIcon, WalletIcon } from "lucide-react";

import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    id: 1,
    type: "خرید",
    description: "کنسرت محمدرضا گلزار",
    amount: -500000,
    date: "1403/09/15",
    status: "تکمیل شده",
  },
  {
    id: 2,
    type: "شارژ",
    description: "شارژ کیف پول",
    amount: 1000000,
    date: "1403/09/10",
    status: "تکمیل شده",
  },
  {
    id: 3,
    type: "خرید",
    description: "نمایش شب یلدا",
    amount: -150000,
    date: "1403/09/08",
    status: "تکمیل شده",
  },
  {
    id: 4,
    type: "بازگشت",
    description: "لغو بلیط سمینار",
    amount: 300000,
    date: "1403/09/05",
    status: "تکمیل شده",
  },
  {
    id: 5,
    type: "خرید",
    description: "جشنواره فیلم فجر",
    amount: -80000,
    date: "1403/09/01",
    status: "تکمیل شده",
  },
];

export default function WalletPage() {
  return (
    <div dir="rtl" className="font-sans dark">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader title="اعتبار من" />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-6 p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <WalletIcon className="h-5 w-5" />
                      موجودی کیف پول
                    </CardTitle>
                    <CardDescription>اعتبار قابل استفاده شما</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold mb-4">۲,۵۷۰,۰۰۰ تومان</div>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <PlusIcon className="h-4 w-4 ml-2" />
                        شارژ کیف پول
                      </Button>
                      <Button variant="outline">
                        <ArrowUpIcon className="h-4 w-4 ml-2" />
                        برداشت
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">درآمد این ماه</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-500">+۳۰۰,۰۰۰</div>
                      <p className="text-xs text-muted-foreground">تومان</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">هزینه این ماه</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-red-500">-۷۳۰,۰۰۰</div>
                      <p className="text-xs text-muted-foreground">تومان</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>تراکنش‌های اخیر</CardTitle>
                  <CardDescription>تاریخچه تراکنش‌های کیف پول شما</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>نوع</TableHead>
                        <TableHead>شرح</TableHead>
                        <TableHead>مبلغ</TableHead>
                        <TableHead>تاریخ</TableHead>
                        <TableHead>وضعیت</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map(transaction => (
                        <TableRow key={transaction.id}>
                          <TableCell>
                            <Badge
                              variant={transaction.type === "خرید" ? "destructive" : "default"}
                            >
                              {transaction.type === "خرید" && (
                                <ArrowDownIcon className="h-3 w-3 ml-1" />
                              )}
                              {transaction.type === "شارژ" && (
                                <ArrowUpIcon className="h-3 w-3 ml-1" />
                              )}
                              {transaction.type === "بازگشت" && (
                                <ArrowUpIcon className="h-3 w-3 ml-1" />
                              )}
                              {transaction.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell
                            className={transaction.amount > 0 ? "text-green-500" : "text-red-500"}
                          >
                            {transaction.amount > 0 ? "+" : ""}
                            {transaction.amount.toLocaleString("fa-IR")} تومان
                          </TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{transaction.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
