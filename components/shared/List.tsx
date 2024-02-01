import { mock } from "@/constants";
import { ICoffee } from "@/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Card from "./Card";

interface ListProps {
  data: ICoffee[];
}

const List = ({ data }: ListProps) => {
  return (
    <Carousel className="w-full mx-auto">
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
    </Carousel>
    //  <div className="flex flex-between ">
    //  </div>
  );
};

export default List;
