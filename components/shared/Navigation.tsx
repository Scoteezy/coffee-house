import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-full flex flex-between md:items-center md:justify-start text-white ">
      {links.map((link)=>(
        <Link 
          className=" md:mr-10 relative" 
          href={link.link} 
          key={link.link}
        >
          {link.img ? (
            <Image 
              alt={link.img} 
              className="absolute -top-4 -left-6  text-white " 
              height={35} 
              src={link.img} 
              width={35}/>) :
            (<p></p>)
          }
          {link.label}
        </Link>
      ))}
 
    </nav>

  );
};

export default Navigation;