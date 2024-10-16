import { standardFont } from "@/app/layout";
import { CheckRounded } from "@mui/icons-material";

export default function StackTech({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="top-2 flex h-fit flex-col gap-4 rounded-md bg-primary_dark/20 p-6 shadow-md md:sticky md:w-52">
      <span className="text-lg text-secondary">Stack Technique</span>
      {technologies.map((technology) => (
        <div className="flex items-center gap-4">
          <CheckRounded
            className="rounded-full bg-primary_dark p-1"
            color="success"
          />
          <span className={`mt-1 text-sm ${standardFont.className}`}>
            {technology}
          </span>
        </div>
      ))}
    </div>
  );
}
