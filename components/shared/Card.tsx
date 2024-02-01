"use client";
import React from "react";

import { ICoffee } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Card = ({ id, img, name, price }: Omit<ICoffee, "description">) => {
  const router = useRouter();

  return (
    <div className="w-[220px] h-[240px] bg-white rounded-lg flex flex-center flex-col ">
      <Image
        alt="coffee"
        className="h-[130px] w-[130px cursor-pointer"
        height={130}
        onClick={() => {
          router.push(`/coffee/${id}`);
        }}
        src={img}
        width={130}
      />
      <p className="p-regular-14 mt-3">{name}</p>
      <p className="p-bold-14 ml-[136px] mt-3">{price}</p>
    </div>
  );
};

export default Card;
