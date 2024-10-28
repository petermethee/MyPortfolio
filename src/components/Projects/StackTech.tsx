import { IconType } from "react-icons";
import { primary_light } from "../../../theme";

export default function StackTech({
  technologies,
}: {
  technologies: { name: string; icon: IconType }[];
}) {
  return (
    <div className="top-2 flex h-fit flex-col gap-6 rounded-md bg-primary_dark/20 p-6 shadow-md sm:sticky sm:w-52">
      <span className="text-lg text-secondary">Stack Technique</span>
      {technologies.map((technology) => (
        <div key={technology.name} className="flex items-center gap-6">
          <div className="rounded-full bg-primary p-2">
            {technology.icon({ size: "18", color: primary_light })}
          </div>
          <span className={`mt-1 font-josefin text-lg font-bold uppercase`}>
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
}
