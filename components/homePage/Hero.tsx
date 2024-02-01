import Link from "next/link";

import Beans from "../shared/Beans";
import Navigation from "../shared/Navigation";
const Hero = () => {
  return (
    <section className="bg-hero  text-white">
      <div className="wrapper ">
        <Navigation style="white" />
        <div className="py-10 lg:py-28 flex-center flex-col">
          <h1 className="h1-regular text-center">
            {" "}
            Everything you Love About Coffee
          </h1>
          <Beans color="white" />
          <p className="h2-regular text-center">
            {" "}
            We makes every day full of energy and taste
            <br /> Want to ry our beans?
          </p>
          <button className="bg-none border flex flex-center w-[120px] h-[30px] mt-4">
            <Link href="/coffee">More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
