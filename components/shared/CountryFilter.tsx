"use client";
import { useEffect, useState } from "react";

import {useRouter, useSearchParams } from "next/navigation";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

import { Toggle } from "../ui/toggle";
const CountryFilter = () => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const onToggle = (country: string)=>{
    if(!query.split(" ").find((elem)=>elem===country)){
      if(query.length>0){
        setQuery(query +" "+ country);

      }else{
        setQuery(country);
      }
    }else{
      setQuery(query.split(" ").filter((elem)=>elem!==country).join(" "));
    }
  };

  useEffect(()=>{
    let newUrl;

    if(query.length>0){
      newUrl = formUrlQuery({
        params:searchParams.toString(),
        key:"country",
        value:query
      });
    }else{
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove:["country"]
      });
    }
    router.push(newUrl,{scroll: false});
  },[query]);
  // console.log(query);
  return (
    <div className=" mt-5 md:ml-16 md:mt-0 flex flex-center">
      <p className="p-regular-14 mr-5">Or filter</p>

      <Toggle className="shadow-md"
        onClick={()=>{
          onToggle("brazil");
        }}
        variant="outline" > Brazil</Toggle>
      <Toggle className="ml-2 shadow-md"
        onClick={()=>{
          onToggle("kenya");
        }} 
        variant="outline"
      > Kenya</Toggle>
      <Toggle className="ml-2 shadow-md"
        onClick={()=>{
          onToggle("columbia");
        }} 
        variant="outline" 
      > Columbia</Toggle>
    </div>
  );
};

export default CountryFilter;