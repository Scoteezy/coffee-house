"use client";
import React from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { formUrlQuery } from "@/lib/utils";

import { Button } from "../ui/button";
type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};
const Pagination = ({ urlParamName, page, totalPages }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams;
  const onClick = (btnType: string) => {
    const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName ?? "page",
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex gap-2 mt-14">
      <Button
        className="w-28"
        disabled={Number(page) <= 1}
        onClick={() => onClick("prev")}
        size="lg"
        variant="outline"
      >
        Previous
      </Button>
      <Button
        className="w-28"
        disabled={Number(page) >= Number(totalPages)}
        onClick={() => onClick("next")}
        size="lg"
        variant="outline"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
