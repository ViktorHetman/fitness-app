import React from "react";

import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Benefits from "@/components/Benefits";
import Classes from "./components/Classes";
import ContacUs from "./components/ContactUs";

import { SelectedPage } from "@/models/types";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setTopOfPage] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <ContacUs setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
