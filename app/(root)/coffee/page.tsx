import About from "@/components/shared/About";
import Controls from "@/components/shared/Controls";
import List from "@/components/shared/List";
import { getAllCoffee } from "@/lib/actions/coffee.actions";
import { ICoffee } from "@/lib/database/models/coffee.model";
const Coffee = async () => {
  const coffee:ICoffee[] = await getAllCoffee();

  return (
    <>
      <About title="About our beans"/>

      <div className="flex w-full flex-col flex-center">
        <div className="w-[250px] h-[1px] bg-black my-10"></div>
        <Controls/>
        <List data={coffee}/>
      </div>
    </>
  );
};

export default Coffee;