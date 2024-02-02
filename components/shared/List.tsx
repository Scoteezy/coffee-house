import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ICoffee } from "@/lib/database/models/coffee.model";

import Card from "./Card";

interface ListProps {
  data: ICoffee[];
  carousel?: boolean
}

const List = ({ data, carousel }: ListProps) => {
  return (
    carousel ? (<Carousel className="w-full mx-auto">
      <CarouselContent>
        {data.map((cof) => (
          <CarouselItem
            className="basis-full md:basis-1/2 lg:basis-1/3 flex flex-center"
            key={cof.id}
          >
            <Card {...cof} />

          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>) :
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {data.map((cof, i) => i < 6 && (
          <Card key={cof._id}
            {...cof} />
        ))}
      </div>
  );
};

export default List;
