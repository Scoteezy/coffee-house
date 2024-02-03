"use client";
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { priceConverter } from "@/lib/utils";
interface CardProps { 
  _id:string,
  name: string,
  price: string,
  miniImgUrl?: string,
  imgUrl:string,
  country: string
}

const Card = ({
  _id,
  name,
  price,
  miniImgUrl,
  imgUrl,
  country
}: CardProps) => {
  const router = useRouter();

  return (
    <div className="w-[220px] h-[240px] bg-white rounded-lg flex flex-center flex-col shadow-lg">
      <Image
        alt="coffee"
        className="h-[130px] w-[130px cursor-pointer"
        height={130}
        onClick={() => {
          router.push(`/coffee/${_id}`);
        }}
        src={miniImgUrl || imgUrl}
        width={130}
      />
      <p className="p-regular-14 mt-3">{name}</p>
      <p className="p-regular-14 ml-[136px] mt-3">{country}</p>
      <p className="p-bold-14 ml-[136px] mt-3">{priceConverter(price)}</p>
    </div>
  );
};

export default Card;
