import { Package } from "../types";
import tick from './svg/tick.svg';

export const packagesHeader = "packagesHeader";

export const packages: Package[] = [
    {
        id: 0,
        titleKey: "pkg0Title",
        contentKey: "pkg0Content",
        icon: tick,
        bgColor: '#00C48C',
        textColor: '#222222',
    },
    {
        id: 1,
        titleKey: "pkg1Title",
        contentKey: "pkg1Content",
        icon: tick,
        bgColor: '#FF6F91',
        textColor: '#E4E4E4',
    },
    {
        id: 2,
        titleKey: "pkg2Title",
        contentKey: "pkg2Content",
        icon: tick,
        bgColor: '#E4E4E4',
        textColor: '#121212',
    },
];