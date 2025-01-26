import { HomeAssets } from "../types";

import dev0 from './svg/dev0.svg';
import dev1 from './svg/dev1.svg';
import dev2 from './svg/dev2.svg';
import dev3 from './svg/dev3.svg';
import dev4 from './svg/dev4.svg';

export const homedata: HomeAssets = {
    h1Header: "Welcome to Jungle-Logic",
    ptext: "Simple, Robust and Clean Solutions",
    cardItems: [
        {
            id: 0,
            "title": "Agile Development",
            "text": "Rapid iterations with continuous feedback to refine the product.",
            "icon": dev0
        },
        {
            id: 1,
            "title": "Automated Testing",
            "text": "Rigorous testing to catch issues early and enhance reliability.",
            "icon": dev1
        },
        {
            id: 2,
            "title": "Innovation in Problem Solving",
            "text": "Keeping things simple by clearly defining what the system should do and how it should perform.",
            "icon": dev2
        },
        {
            id: 3,
            "title": "Cloud-Native Approach",
            "text": "Systems that are easily recoverable from issues and simple to monitor.",
            "icon": dev3
        },
        {
            id: 4,
            "title": "Clean Code and Best Practices",
            "text": "Solutions that are maintainable and efficient.",
            "icon": dev4
        },
        {
            id: 5,
            "title": "Automated Deployments",
            text: "Using strong automation to make frequent and reliable updates.",
            icon: dev0
        }
    ]
}