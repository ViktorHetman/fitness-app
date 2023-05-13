import { SelectedPage } from "../types";

export type ActionButtonProps = {
  children?: string;
  setSelectedPage: (value: SelectedPage) => void;
};
