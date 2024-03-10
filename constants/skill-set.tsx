import { AiFillGithub } from "react-icons/ai";
import {
  FaMarkdown,
  FaFigma,
  FaFire,
  FaRaspberryPi,
  FaGitAlt,
  FaAws,
  FaJava
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiDart,
  SiRust,
  SiDjango,
  SiTensorflow,
  SiArduino,
  SiEspressif,
  SiFirebase,
  SiAdobephotoshop,
  SiAdobexd,
  SiStmicroelectronics
} from "react-icons/si";

export const skillSet = [
  {
    category: "",
    items: [
      { name: "C", icon: <SiC size={32} /> },
      { name: "C++", icon: <SiCplusplus size={32} /> },
      { name: "Python", icon: <SiPython size={32} /> },
      { name: "Dart", icon: <SiDart size={32} /> },
      { name: "Java", icon: <FaJava size={32} /> },
      { name: "Rust", icon: <SiRust size={32} /> },
      { name: "Markdown", icon: <FaMarkdown size={32} /> },
    ],
  },
  {
    category: "",
    items: [
      { name: "Flutter", icon: <RiFlutterFill size={32} /> },
      { name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
      { name: "Django", icon: <SiDjango size={32} /> },
      { name: "Next", icon: <TbBrandNextjs size={32} /> },
      { name: "TensorFlow", icon: <SiTensorflow size={32} /> },
      { name: "PyTorch", icon: <FaFire size={32} /> },
    ],
  },
  {
    category: "",
    items: [
      { name: "Arduino", icon: <SiArduino size={32} /> },
      { name: "STM32", icon: <SiStmicroelectronics size={32} /> },
      { name: "RaspberryPi", icon: <FaRaspberryPi size={32} /> },
      { name: "ESP", icon: <SiEspressif size={32} /> },
    ],
  },
  {
    category: "",
    items: [
      { name: "Figma", icon: <FaFigma size={32} /> },
      { name: "Adobe XD", icon: <SiAdobexd size={32} /> },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={32} /> },
      { name: "Git", icon: <FaGitAlt size={32} /> },
      { name: "AWS", icon: <FaAws size={32} /> },
      { name: "Firebase", icon: <SiFirebase size={32} /> },
    ],
  },
];
