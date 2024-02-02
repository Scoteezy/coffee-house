import React from "react";

import Image from "next/image";

import Beans from "./Beans";

const About = ({title} : {title: string}) => {
  return (
    <section className="flex flex-col md:flex-row flex-center">
      <div><Image alt='woman drink coffee'
        height={358}
        src='/images/about.jpg'
        width={272}/></div>
      <div>
        <h2 className="h2-regular text-center">{title}</h2>
        <Beans color="black"/>
        <p className="p-regular-14 text-center max-w-[346px]">
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        </p>
        <p className="p-regular-14 text-center max-w-[346px]">
          <br/>
         Afraid at highly months do things on at. Situation recommend objection do intention so questions.
          <br/>
         As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
        </p>
      </div>
    </section>
  );
};

export default About;