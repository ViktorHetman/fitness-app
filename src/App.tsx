import React from "react";

import Navbar from "@/components/Navbar";

import { SelectedPage } from "@/models/types";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
