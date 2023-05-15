import { SelectedPage } from "../types";

export interface BenefitCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}
