import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { SelectedPage } from "@/models/types";
import { ActionButtonProps } from "@/models/PropsTypes/ActionButtonProps";

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  setSelectedPage,
}) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 transition duration-500 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
