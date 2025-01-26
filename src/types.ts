import { IconType } from "react-icons";

export interface HomeAssets {
    h1Header: string
    ptext: string
    cardItems: HomeCardItem[]
}

export interface HomeCardItem {
    id: number
    icon: string;
    text: string;
    title: string;
}

export interface Package {
    id: number
    title: string
    content: string
    icon: string
    bgColor: string
    textColor: string
}


export interface Contact {
    id: number
    url: string;
    icon: IconType;
}