import { SearchParamProps } from "@/types";

import About from "@/components/shared/About";
import Controls from "@/components/shared/Controls";
import List from "@/components/shared/List";
import { getAllCoffee } from "@/lib/actions/coffee.actions";
const Coffee = async ({searchParams}:SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const country = (searchParams?.country as string) || "";

  // const events = await getAllEvents({
  //   query: searchText,
  //   category,
  //   page,
  //   limit: 6,
  // });
  const coffee = await getAllCoffee({ 
    query: searchText,
    country,
    page,
    limit: 6,
  });

  return (
    <>
      <About title="About our beans"/>

      <div className="flex w-full flex-col flex-center">
        <div className="w-[250px] h-[1px] bg-black my-10"></div>
        <Controls/>
        <List data={coffee?.data}
          page={page}
          totalPages={coffee?.totalPages}/>
      </div>
    </>
  );
};

export default Coffee;