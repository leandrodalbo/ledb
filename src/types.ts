import { IconType } from "react-icons";

export interface HomeAssets {
    h1HeaderKey: string
    ptextKey: string
    cardItems: HomeCardItem[]
}

export interface HomeCardItem {
    id: number
    icon: string;
    textKey: string;
    titleKey: string;
}

export interface Package {
    id: number
    titleKey: string
    contentKey: string
    icon: string
    bgColor: string
    textColor: string
}


export interface Contact {
    id: number
    url: string;
    icon: IconType;
}


export interface NavigationItems {
    jl: string
    homeKey: string
    packagesKey: string
    contactKey: string
    es: string
    en: string
}

