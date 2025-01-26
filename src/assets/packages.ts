import { Package } from "../types";
import tick from './svg/tick.svg';

export const packagesHeader = "Available Packages";

export const packages: Package[] = [
    {
        id: 0,
        title: 'Cloud-Native Application Development',
        content:
            'Build secure, scalable apps with Java, Kotlin, Spring Boot, and AWS—ideal for startups and cloud-focused businesses.',
        icon: tick,
        bgColor: '#00C48C',
        textColor: '#222222',
    },
    {
        id: 1,
        title: 'Infrastructure Automation Services',
        content:
            'Design, automate, and manage cloud infrastructure with Terraform and AWS for scalable, cost-effective solutions.',
        icon: tick,
        bgColor: '#FF6F91',
        textColor: '#E4E4E4',
    },
    {
        id: 2,
        title: 'Full-Stack Web Development',
        content:
            'Create responsive web apps with React, TypeScript, and Spring Boot—perfect for interactive frontends and robust backends.',
        icon: tick,
        bgColor: '#E4E4E4',
        textColor: '#121212',
    },
];