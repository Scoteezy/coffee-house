"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

import { Input } from "../ui/input";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl;

      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router]);

  return (
    <div className="flex flex-center ">
      <p className="p-regular-14 w-[120px] mr-3">Looking for</p>
      <Input className="shadow-md"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="start typing here..."
        type="text"
      />
    </div>
  );
};

export default Search;
