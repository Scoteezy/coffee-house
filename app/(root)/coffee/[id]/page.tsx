
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

import Beans from "@/components/shared/Beans";
import { Button } from "@/components/ui/button";
import { getCoffeeById } from "@/lib/actions/coffee.actions";
import { priceConverter } from "@/lib/utils";
const CoffeePage = async ({
  params: {id},
}: SearchParamProps) => {
  const coffee = await  getCoffeeById(id);

  return coffee && (
    <div className="mt-10 flex flex-col md:flex-row flex-center">
      <Image
        alt={coffee.name}
        className="mb-5 md:mr-5 md:mb-0 shadow-lg"
        height={392}
        src={coffee.imgUrl}
        width={392} />
      <div>
        <h2 className="h2-regular text-center">{coffee.name}</h2>
        <Beans color="black" />
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
        <Button className="bg-none border flex flex-center w-[120px] h-[30px] mt-4 mx-auto">
          <Link href="/payment">Buy</Link>
        </Button>
      </div>
    </div>
  );
};

export default CoffeePage;
