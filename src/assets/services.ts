import { Service } from "../types";

import {
  FaCloud,
  FaCode,
  FaBolt,
  FaSyncAlt,
  FaServer,
  FaCogs,
} from "react-icons/fa";

export const services: Service[] = [
  {
    id: 0,
    titleKey: "s0Title",
    contentKey: "s0Content",
    icon: FaSyncAlt,
  },
  {
    id: 1,
    titleKey: "s1Title",
    contentKey: "s1Content",
    icon: FaBolt,
  },
  {
    id: 2,
    titleKey: "s2Title",
    contentKey: "s2Content",
    icon: FaCloud,
  },
  {
    id: 3,
    titleKey: "s3Title",
    contentKey: "s3Content",
    icon: FaCode,
  },
  {
    id: 4,
    titleKey: "s4Title",
    contentKey: "s4Content",
    icon: FaCogs,
  },
  {
    id: 5,
    titleKey: "s5Title",
    contentKey: "s5Content",
    icon: FaServer,
  },
];
