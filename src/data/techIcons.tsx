import { FaPython, FaReact } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";
import { PiFileSqlFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiElectron } from "react-icons/si";

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
