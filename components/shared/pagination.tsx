import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationSectionProps {
  setPage: (page: number) => void;
  page: number;
  totalPages: number;
}

export default function PaginationSection({ setPage, page, totalPages }: PaginationSectionProps) {
  return (
    <div className="flex justify-center my-8">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setPage(page - 1)} />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, _index) => {
            return (
              <PaginationItem key={page}>
                <PaginationLink onClick={() => setPage(page)}>{page}</PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={() => setPage(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
