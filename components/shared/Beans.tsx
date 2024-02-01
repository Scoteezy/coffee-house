import Image from "next/image";
interface BeansProps {
  color: string;
}

const Beans = ({ color }: BeansProps) => {
  return (
    <div className="flex flex-center mb-4 mt-2 md:mb-5 md:mt-4">
      <div
        className={`w-12 h-[1px] ${color === "white" ? "bg-white" : "bg-black"} mr-5`}
      ></div>
      {color === "white" ? (
        <Image
          alt="beans"
          className="w-[30px] h-[30px]"
          height={30}
          src="/images/beans-filled.svg"
          width={30}
        />
      ) : (
        <Image
          alt="beans"
          className="w-[30px] h-[30px]"
          height={30}
          src="/images/beans-black.svg"
          width={30}
        />
      )}

      <div
        className={`w-12 h-[1px] ${color === "white" ? "bg-white" : "bg-black"} ml-5`}
      ></div>
    </div>
  );
};

export default Beans;
