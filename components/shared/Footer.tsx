import React from "react";

import Beans from "./Beans";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-center mt-7">
      <Navigation position="footer" style="black" />
      <Beans color="black" />
    </footer>
  );
};

export default Footer;
