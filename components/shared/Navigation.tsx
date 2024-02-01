import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navigation = ({
  style,
  position,
}: {
  style: string;
  position?: string;
}) => {
  return (
    <nav
      className={`w-full flex wrapper
      ${style === "white" ? "text-white" : "text-black"}  
      ${
        position === "footer"
          ? "flex-col sm:flex-row flex-center"
          : "flex-between  sm:items-center sm:justify-start"
      }`}
    >
      {links.map((link) => (
        <Link
          className={`sm:mr-10 relative last:sm:mr-0 
          ${position === "footer" ? "mb-1 last:mb-0 sm:mb-0" : "w-[80px] sm:w-auto  "}`}
          href={link.link}
          key={link.link}
        >
          {link.img ? (
            <Image
              alt="beans"
              className="absolute -top-4 -left-6"
              height={35}
              src={style == "white" ? link.img : link.imgBlack}
              width={35}
            />
          ) : (
            <p></p>
          )}
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
