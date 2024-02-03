import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ICoffee } from "@/lib/database/models/coffee.model";

import Card from "./Card";
import Pagination from "./Pagination";

interface ListProps {
  data: ICoffee[];
  carousel?: boolean
  // limit?: number;
  page?: number | string;
  totalPages?: number;
  urlParamName?: string;
}

const List = ({ data, carousel,page, totalPages = 0 ,urlParamName, }: ListProps) => {
  return (
    carousel ? (<Carousel className="w-full mx-auto">
      <CarouselContent>
        {data.map((cof) => (
          <CarouselItem
            className="basis-full md:basis-1/2 lg:basis-1/3 flex flex-center"
            key={cof._id}
          >
            <Card {...cof} />

          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>) :
      <div className="flex flex-col flex-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
          {data.map((cof, i) => i < 6 && (
            <Card key={cof._id}
              {...cof} />
          ))}
        </div>
        {totalPages > 1 && page && (
          <Pagination
            page={page}
            totalPages={totalPages}
            urlParamName={urlParamName}
          />
        )}
      </div>
      
  );
};

export default List;
