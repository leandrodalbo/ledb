import { Contact } from "../types";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const contacs: Contact[] = [
  {
    id: 0,
    url: "https://www.linkedin.com/in/leandrodlb/",
    icon: FaLinkedin,
  },
  {
    id: 1,
    url: "https://x.com/xpdrivenblog",
    icon: FaXTwitter,
  },
  {
    id: 2,
    url: "https://github.com/leandrodalbo",
    icon: FaGithub,
  },
];
