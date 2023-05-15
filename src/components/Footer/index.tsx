import React from "react";

import logo from "@/assets/Logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dolorem facilis incidunt praesentium corporis,
            deserunt tempora est.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">###</p>
          <p className="my-5">###</p>
          <p>###</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">###</p>
          <p className="my-5">+0(000) 000 00 00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
