export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contacus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
