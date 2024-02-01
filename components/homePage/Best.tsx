import { mock } from "@/constants";

import List from "../shared/List";
const Best = () => {
  return (
    <section className="bg-[url('/images/best-bg.jpg')] bg-cover bg-no-repeat w-full py-24">
      <div className="max-w-[800px] w-full mx-auto">
        <h2 className="h2-regular text-center mb-10">Our Best</h2>
        <List />
      </div>
    </section>
  );
};

export default Best;
