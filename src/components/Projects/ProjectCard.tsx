import Image from "next/image";
import img from "../../assets/portfolio.png";
import AmazingCard from "../shared/AmazingCard";
export type TProject = {
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
  technologies: string[];
  duration: string;
  date: string;
  status: "ongoing" | "finished";
  images: string[];
  client: string;
};

export default function ProjectCard({ project }: { project: TProject }) {
  return (
    <AmazingCard className="relative max-w-xl aspect-video" glare shine w-full>
      <div className="overflow-hidden rounded-xl absolute w-full h-full -z-10">
        <Image alt="" src={img} objectFit="cover" />
      </div>
    </AmazingCard>
  );
}
