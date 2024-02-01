"use client";

import { usePathname } from "next/navigation";

import Navigation from "./Navigation";
const Header = ({ style, title }: { style: string; title: string }) => {
  const pathname = usePathname();

  return (
    <div
      className={` ${pathname.split("/")[1] === "coffee" ? "bg-header-first" : "bg-header-second"}`}
    >
      <header className="wrapper min-h-[230px]">
        <Navigation style="white" />
        <h1 className="h1-regular mt-5 text-white text-center">
          {pathname.split("/")[1] === "coffee"
            ? "Our Coffee"
            : "For your pleasure"}
        </h1>
      </header>
    </div>
  );
};

export default Header;
