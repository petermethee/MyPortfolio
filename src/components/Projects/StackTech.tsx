import { IconType } from "react-icons";

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
          <div className="rounded-full bg-primary_dark p-2">
            {technology.icon({ size: "18" })}
          </div>
          <span className={`mt-1 font-josefin text-lg font-bold capitalize`}>
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  );
}
