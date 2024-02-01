"use client";
import { mock } from "@/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

import Beans from "@/components/shared/Beans";
import { priceConverter } from "@/lib/utils";
const CoffeePage = () => {
  const {id} = useParams();
  const coffee = mock.find((elem)=>elem.id===+id);

  return  coffee&&(
    <div className="mt-10 flex flex-col md:flex-row flex-center">
      <Image alt={coffee.name} className="mb-5 md:mr-5 md:mb-0 shadow-lg" height={392} src={coffee.img} width={392}/>
      <div>
        <h2 className="h2-regular text-center">{coffee.name}</h2>
        <Beans color="black"/>
        <p className="p-regular-14"><strong>Country: </strong>{coffee.country}</p>
        <p className="p-regular-14 max-w-[410px] mt-5"><strong>Description: </strong>{coffee.description}</p>
        <p className="text-[14px] mt-8">
          <strong>
            Price: 
          </strong> 
          <span className="h2-regular">
            {priceConverter(coffee.price)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CoffeePage;
