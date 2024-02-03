import CountryFilter from "./CountryFilter";
import Search from "./Search";
const Controls = () => {
  return (
    <div className="mx-auto flex mb-5 w-full flex-center flex-col md:flex-row">
      <Search/>

      <CountryFilter/>
    </div>
  );
};

export default Controls;