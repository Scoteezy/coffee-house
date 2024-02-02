import { getAllCoffee } from "@/lib/actions/coffee.actions";
import { ICoffee } from "@/lib/database/models/coffee.model";

import List from "../shared/List";
const Best = async () => {
  const coffee:ICoffee[] = await getAllCoffee();

  return (
    <section className="bg-[url('/images/best-bg.jpg')] bg-cover bg-no-repeat w-full py-24">
      <div className="max-w-[800px] w-full mx-auto">
        <h2 className="h2-regular text-center mb-10">Our Best</h2>
        <List carousel={true}
          data={coffee.filter((elem) => elem.best)} />
      </div>
    </section>
  );
};

export default Best;
