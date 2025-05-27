// import Link from "next/link";
// import Image from "next/image";
// import { CalendarDays, MapPin, Search, Users } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import EventCard from '@/components/ui/event-card'
// import api from "@/lib/axios";
// import { Event } from "@/models";

// import { EventServices } from "@/services/events";

// export default async function EventsPage() {
//   const events: Event[] = await EventServices.getAll();

//   return (
//     <div className="container flex mx-auto flex-col py-10">
//       <div className="mx-4">
//         <div className="flex flex-col items-center gap-4 text-center mb-10 ">
//           <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//             رویدادها
//           </h1>
//           <p className="max-w-[700px] text-muted-foreground md:text-xl">
//             تمام رویدادهای در حال برگزاری را مشاهده و در آن‌ها شرکت کنید
//           </p>
//         </div>

//         {/* Search and Filters */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
//           <div className="md:col-span-2 relative">
//             <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
//             <Input placeholder="جستجوی رویداد..." className="pr-10" />
//           </div>
//           <div>
//             <Select>
//               <SelectTrigger>
//                 <SelectValue placeholder="دسته‌بندی" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">همه</SelectItem>
//                 <SelectItem value="technology">فناوری</SelectItem>
//                 <SelectItem value="business">کسب و کار</SelectItem>
//                 <SelectItem value="education">آموزشی</SelectItem>
//                 <SelectItem value="design">طراحی</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div>
//             <Select>
//               <SelectTrigger>
//                 <SelectValue placeholder="تاریخ" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">همه</SelectItem>
//                 <SelectItem value="upcoming">پیش رو</SelectItem>
//                 <SelectItem value="thisWeek">این هفته</SelectItem>
//                 <SelectItem value="thisMonth">این ماه</SelectItem>
//                 <SelectItem value="past">گذشته</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>

//       {/* Events Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-6 gap-6 mb-10">
//       {events.map((event) => ( <EventCard event={event} />

//       ))}
//       </div>

//       <div className="flex justify-center my-8">
//         <div className="flex space-x-1 space-x-reverse">
//           <Button variant="outline" size="icon">
//             <span className="sr-only">صفحه قبل</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-4 w-4"
//             >
//               <path d="m9 18 6-6-6-6" />
//             </svg>
//           </Button>
//           <Button variant="outline" size="sm">
//             ۱
//           </Button>
//           <Button variant="outline" size="sm">
//             ۲
//           </Button>
//           <Button variant="outline" size="sm" className="bg-muted">
//             ۳
//           </Button>
//           <Button variant="outline" size="sm">
//             ۴
//           </Button>
//           <Button variant="outline" size="sm">
//             ۵
//           </Button>
//           <Button variant="outline" size="icon">
//             <span className="sr-only">صفحه بعد</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-4 w-4"
//             >
//               <path d="m15 18-6-6 6-6" />
//             </svg>
//           </Button>
//         </div>
//       </div>

//       <div className="flex flex-col items-center gap-4 text-center mt-12 bg-muted p-8 rounded-lg mx-4">
//         <h2 className="text-2xl font-bold">
//           می‌خواهید رویداد خود را ایجاد کنید؟
//         </h2>
//         <p className="text-muted-foreground">
//           به سادگی می‌توانید رویداد خود را ایجاد کرده و مدیریت کنید
//         </p>
//         <Button asChild size="lg" className="mt-2">
//           <Link href="/new-event">ایجاد رویداد جدید</Link>
//         </Button>
//       </div>
//     </div>
//   );
// }
