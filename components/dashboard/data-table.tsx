/* eslint-disable max-lines-per-function */
"use client";

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";

import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ClockIcon,
  RefreshCwIcon,
  XCircleIcon,
} from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Types
interface TicketType {
  public_id: string;
  title: string;
  description: string;
  price: number;
  max_participants: number;
}

interface Tickets {
  public_id: string;
  created_at: string;
  updated_at: string;
  notes: string;
  status: string;
  ticket_number: number;
  ticket_type: TicketType;
}

interface TransformedTicket {
  id: string;
  eventName: string;
  ticketType: string;
  date: string;
  time: string;
  venue: string;
  price: string;
  status: string;
  notes: string;
  ticketNumber: number;
  maxParticipants: number;
}

// Utility functions
function transformTicketData(tickets: Tickets[]): TransformedTicket[] {
  return tickets.map(ticket => {
    const createdDate = new Date(ticket.created_at);

    // Format date in Persian/Farsi format
    const date = createdDate.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Format time
    const time = createdDate.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Map status codes to Persian labels
    const statusMap: Record<string, string> = {
      p: "در انتظار پرداخت",
      s: "موفق",
      c: "لغو شده",
      e: "منقضی شده",
    };

    return {
      id: ticket.public_id,
      eventName: ticket.ticket_type.title,
      ticketType:
        ticket.ticket_type.description.length > 50
          ? `${ticket.ticket_type.description.substring(0, 50)}...`
          : ticket.ticket_type.description,
      date,
      time,
      venue: "مکان رویداد", // This would come from event data if available
      price: ticket.ticket_type.price.toString(),
      status: statusMap[ticket.status] || "نامشخص",
      notes: ticket.notes,
      ticketNumber: ticket.ticket_number,
      maxParticipants: ticket.ticket_type.max_participants,
    };
  });
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("fa-IR").format(price);
}

// API function to fetch tickets
async function fetchTickets(): Promise<Tickets[]> {
  try {
    const response = await fetch("/api/v1/ticket/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
}

// Custom hook for managing tickets
function useTickets(initialData?: Tickets[]) {
  const [tickets, setTickets] = React.useState<TransformedTicket[]>([]);
  const [isLoading, setIsLoading] = React.useState(!initialData);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (initialData) {
      try {
        const transformedTickets = transformTicketData(initialData);
        setTickets(transformedTickets);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "خطا در پردازش داده‌ها");
        setIsLoading(false);
      }
    }
  }, [initialData]);

  const updateTickets = (newTickets: Tickets[]) => {
    try {
      setIsLoading(true);
      const transformedTickets = transformTicketData(newTickets);
      setTickets(transformedTickets);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطا در پردازش داده‌ها");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    tickets,
    isLoading,
    error,
    updateTickets,
  };
}

// Table columns definition
const createColumns = (): ColumnDef<TransformedTicket>[] => [
  {
    accessorKey: "eventName",
    header: "نام رویداد",
    cell: ({ row }) => {
      return <div className="font-medium">{row.original.eventName}</div>;
    },
    enableHiding: false,
  },
  {
    accessorKey: "ticketType",
    header: "نوع بلیط",
    cell: ({ row }) => (
      <div className="max-w-[300px]">
        <Badge className="px-1.5 text-muted-foreground " variant="outline">
          {row.original.ticketType}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="w-full text-right">قیمت (تومان)</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {formatPrice(Number.parseInt(row.original.price, 10))}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "وضعیت",
    cell: ({ row }) => {
      const status = row.original.status;
      let icon = <ClockIcon className="h-3 w-3" />;
      let colorClass = "text-yellow-500 dark:text-yellow-400";

      if (status === "موفق") {
        icon = <CheckCircle2Icon className="h-3 w-3 text-green-500 dark:text-green-400" />;
        colorClass = "text-green-500 dark:text-green-400";
      } else if (status === "لغو شده") {
        icon = <XCircleIcon className="h-3 w-3 text-red-500 dark:text-red-400" />;
        colorClass = "text-red-500 dark:text-red-400";
      } else if (status === "منقضی شده") {
        icon = <AlertCircleIcon className="h-3 w-3 text-gray-500 dark:text-gray-400" />;
        colorClass = "text-gray-500 dark:text-gray-400";
      }

      return (
        <Badge
          className={`flex gap-1 px-1.5 text-muted-foreground ${colorClass}`}
          variant="outline"
        >
          {icon}
          {status}
        </Badge>
      );
    },
  },
];

// Main DataTable component
interface DataTableProps {
  data?: Tickets[];
  isLoading?: boolean;
  onRefresh?: () => void;
}

export function DataTable({
  // eslint-disable-next-line @eslint-react/no-unstable-default-props
  data = [],
  isLoading: externalLoading = false,
  onRefresh,
}: DataTableProps) {
  const { tickets, isLoading: internalLoading, error, updateTickets } = useTickets(data);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 40,
  });

  const columns = React.useMemo(() => createColumns(), []);
  const isLoading = externalLoading || internalLoading;

  const table = useReactTable({
    data: tickets,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  // Update tickets when data prop changes
  React.useEffect(() => {
    if (data && data.length > 0) {
      updateTickets(data);
    }
  }, [data, updateTickets]);

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="text-red-500">خطا: {error}</div>
          {onRefresh && (
            <Button variant="outline" onClick={onRefresh}>
              <RefreshCwIcon className="mr-2 h-4 w-4" />
              تلاش مجدد
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <Tabs
      dir="rtl"
      className="flex w-full flex-col justify-start gap-6 text-right"
      defaultValue="tickets"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label className="sr-only" htmlFor="view-selector">
          نمایش
        </Label>
        <Select defaultValue="tickets">
          <SelectTrigger className="@4xl/main:hidden flex w-fit" id="view-selector">
            <SelectValue placeholder="انتخاب نمایش" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tickets">بلیط‌های من</SelectItem>
            <SelectItem value="favorites">علاقه‌مندی‌ها</SelectItem>
            <SelectItem value="bookmarks">نشان‌شده‌ها</SelectItem>
            <SelectItem value="calendar">تقویم</SelectItem>
          </SelectContent>
        </Select>
        <TabsList className="@4xl/main:flex hidden">
          <TabsTrigger value="tickets">بلیط‌های من</TabsTrigger>
          <TabsTrigger className="gap-1" value="favorites">
            علاقه‌مندی‌ها{" "}
            <Badge
              className="flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30"
              variant="secondary"
            >
              ۸
            </Badge>
          </TabsTrigger>
          <TabsTrigger className="gap-1" value="bookmarks">
            نشان‌شده‌ها{" "}
            <Badge
              className="flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30"
              variant="secondary"
            >
              ۵
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="calendar">تقویم من</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {table
                .getAllColumns()
                .filter(column => typeof column.accessorFn !== "undefined" && column.getCanHide())
                .map(column => {
                  return (
                    <DropdownMenuCheckboxItem
                      checked={column.getIsVisible()}
                      className="capitalize"
                      key={column.id}
                      onCheckedChange={value => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <TabsContent
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
        value="tickets"
      >
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted ">
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map(row => (
                  <TableRow data-state={row.getIsSelected() && "selected"} key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell className="h-24 text-center" colSpan={columns.length}>
                    هیچ نتیجه‌ای یافت نشد.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between px-4">
          {/* <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
            {table.getFilteredSelectedRowModel().rows.length} از{" "}
            {table.getFilteredRowModel().rows.length} ردیف انتخاب شده.
          </div> */}
          <div className="flex w-full items-center gap-8 lg:w-fit">
            {/* <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                ردیف در هر صفحه
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={value => {
                  table.setPageSize(Number(value));
                }}
              >
                <SelectTrigger className="w-20" id="rows-per-page">
                  <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div> */}
            {/* <div className="flex w-fit items-center justify-center text-sm font-medium">
              صفحه {table.getState().pagination.pageIndex + 1} از {table.getPageCount()}
            </div> */}
            {/* <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex bg-transparent"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">رفتن به صفحه اول</span>
                <ChevronsRightIcon />
              </Button>
              <Button
                variant="outline"
                className="size-8 bg-transparent"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">رفتن به صفحه قبل</span>
                <ChevronRightIcon />
              </Button>
              <Button
                variant="outline"
                className="size-8 bg-transparent"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">رفتن به صفحه بعد</span>
                <ChevronLeftIcon />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex bg-transparent"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">رفتن به صفحه آخر</span>
                <ChevronsLeftIcon />
              </Button>
            </div> */}
          </div>
        </div>
      </TabsContent>
      <TabsContent className="flex flex-col px-4 lg:px-6" value="favorites">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
          علاقه‌مندی‌های شما در اینجا نمایش داده می‌شود
        </div>
      </TabsContent>
      <TabsContent className="flex flex-col px-4 lg:px-6" value="bookmarks">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
          رویدادهای نشان‌شده در اینجا نمایش داده می‌شود
        </div>
      </TabsContent>
      <TabsContent className="flex flex-col px-4 lg:px-6" value="calendar">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed flex items-center justify-center text-muted-foreground">
          تقویم رویدادهای شما در اینجا نمایش داده می‌شود
        </div>
      </TabsContent>
    </Tabs>
  );
}

// Main component with API integration
export default function TicketManagement() {
  const [tickets, setTickets] = React.useState<Tickets[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [, setError] = React.useState<string | null>(null);

  // Function to load tickets from API
  const loadTickets = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchTickets();
      setTickets(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطا در دریافت داده‌ها");
      console.error("Error loading tickets:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Load tickets on component mount
  React.useEffect(() => {
    loadTickets();
  }, []);

  // Handle refresh
  const handleRefresh = () => {
    loadTickets();
  };

  return (
    <div dir="rtl" className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">مدیریت بلیط‌ها</h1>
        <p className="text-muted-foreground">مشاهده و مدیریت بلیط‌های خریداری شده</p>
      </div>
      <DataTable data={tickets} isLoading={isLoading} onRefresh={handleRefresh} />
    </div>
  );
}
