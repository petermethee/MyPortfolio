import { DiRedis } from "react-icons/di";
import {
  FaAndroid,
  FaAngular,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import { FaGolang } from "react-icons/fa6";
import { IconBaseProps } from "react-icons/lib";
import { PiFileSqlFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDotnet, SiElectron } from "react-icons/si";

export const reactTech = {
  name: "React",
  icon: (props: IconBaseProps) => <FaReact {...props} color="#61DAFB" />,
};

export const tailwindTech = {
  icon: (props: IconBaseProps) => (
    <RiTailwindCssFill {...props} color="#06B6D4" />
  ),
  name: "Tailwind",
};

export const nextJSTech = {
  name: "NextJS",
  icon: (props: IconBaseProps) => <RiNextjsFill color="#fff" {...props} />,
};

export const electronTech = {
  name: "Electron",
  icon: (props: IconBaseProps) => <SiElectron {...props} />,
};

export const sqlTech = {
  name: "SQL",
  icon: (props: IconBaseProps) => <PiFileSqlFill {...props} color="#F0DB4F" />,
};

export const pythonTech = {
  name: "Python",
  icon: (props: IconBaseProps) => <FaPython {...props} color="#3776AB" />,
};

export const dotNetTech = {
  name: ".NET",
  icon: (props: IconBaseProps) => <SiDotnet {...props} color="#926be1" />,
};

export const nodeTech = {
  name: "NodeJS",
  icon: (props: IconBaseProps) => <FaNodeJs {...props} color="#339933" />,
};

export const androidTech = {
  name: "Android Studio",
  icon: (props: IconBaseProps) => <FaAndroid {...props} color="#3DDC84" />,
};

export const javaTech = {
  name: "Java",
  icon: (props: IconBaseProps) => <FaJava {...props} color="#ED8B00" />,
};

export const golangTech = {
  name: "Golang",
  icon: (props: IconBaseProps) => <FaGolang {...props} color="#00ADD8" />,
};

export const angularTech = {
  name: "Angular",
  icon: (props: IconBaseProps) => <FaAngular {...props} color="#C3002F" />,
};

export const htmlTech = {
  name: "HTML",
  icon: (props: IconBaseProps) => <FaHtml5 {...props} color="#E34F26" />,
};

export const cssTech = {
  name: "CSS",
  icon: (props: IconBaseProps) => <FaCss3Alt {...props} color="#2a65f0" />,
};

export const redisTech = {
  name: "Redis",
  icon: (props: IconBaseProps) => <DiRedis {...props} color="#DC7633" />,
};

export const dockerTech = {
  name: "Docker",
  icon: (props: IconBaseProps) => <FaDocker {...props} color="#1488C9" />,
};
