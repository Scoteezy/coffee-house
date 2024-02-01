import About from "@/components/shared/About";
import { Input } from "@/components/ui/input";
const Pleasure = () => {
  return (
    <>
      <About/>
      <div className="w-full">
        <div className="w-[250px] mx-auto h-[1px] bg-black my-10"></div>
      </div>
      <div className="wrapper">
        <h2 className="h2-regular text-center">Search for your package</h2>
        <Input className="mt-5" placeholder="Your package number"/>
      </div>
     
    </>
  );
};

export default Pleasure;