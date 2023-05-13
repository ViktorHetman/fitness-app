import { SelectedPage } from "../types";

export type LinkProps = {
  children: string;
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
