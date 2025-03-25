import { IconType } from "react-icons";

export interface HomeAssets {
  h1HeaderKey: string;
  ptextKey: string;
  ptextKey2: string;
  beforeName: string;
  btnContact: string;
  myName: String;
}

export interface HomeCardItem {
  id: number;
  icon: string;
  textKey: string;
  titleKey: string;
}

export interface Service {
  id: number;
  titleKey: string;
  contentKey: string;
  icon: IconType;
}

export interface Contact {
  id: number;
  url: string;
  icon: IconType;
}

export interface NavigationItems {
  brand: string;
  homeKey: string;
  servicesKey: string;
  contactKey: string;
  es: string;
  en: string;
}
