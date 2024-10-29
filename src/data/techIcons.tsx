import { FaReact } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

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
