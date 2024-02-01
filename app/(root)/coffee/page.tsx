import { mock } from "@/constants";

import About from "@/components/shared/About";
import Controls from "@/components/shared/Controls";
import List from "@/components/shared/List";
const Coffee = () => {
  return (
    <>
      <About/>

      <div className="flex w-full flex-col flex-center">
        <div className="w-[250px] h-[1px] bg-black my-10"></div>
        <Controls/>
        <List data={mock}/>
      </div>
    </>
  );
};

export default Coffee;