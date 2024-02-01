import { mock } from "@/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Card from "./Card";
const List = () => {
  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent>
        {mock.map((cof) => (
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
