import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Link from "./Link";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/models/types";

type NavbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar: React.FC<NavbarProps> = ({ selectedPage, setSelectedPage }) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  Home
                </Link>
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  Benefits
                </Link>
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  Our Classes
                </Link>
                <Link
                  page="Contac Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  Contac Us
                </Link>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
