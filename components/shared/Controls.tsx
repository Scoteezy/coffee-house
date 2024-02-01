import React from "react";

import { Input } from "../ui/input";
import { Toggle } from "../ui/toggle";
const Controls = () => {
  return (
    <div className="mx-auto flex mb-5 w-full flex-center flex-col md:flex-row">
      <div className="flex flex-center ">
        <p className="p-regular-14 w-[120px] mr-3">Looking for</p>
        <Input className="shadow-md" placeholder="start typing here..."/>
      </div>

      <div className=" mt-5 md:ml-16 md:mt-0 flex flex-center">
        <p className="p-regular-14 mr-5">Or filter</p>

        <Toggle className="shadow-md" variant="outline" > Brazil</Toggle>
        <Toggle className="ml-2 shadow-md" variant="outline" > Kenya</Toggle>
        <Toggle className="ml-2 shadow-md" variant="outline" > Columbia</Toggle>
      </div>
    </div>
  );
};

export default Controls;