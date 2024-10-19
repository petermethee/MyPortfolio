import { CheckRounded } from "@mui/icons-material";

export default function StackTech({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="sticky top-2 flex h-fit flex-col gap-4 rounded-md bg-primary_dark/20 p-6 shadow-md sm:w-52">
      <span className="text-lg text-secondary">Stack Technique</span>
      {technologies.map((technology) => (
        <div key={technology} className="flex items-center gap-4">
          <CheckRounded
            className="rounded-full bg-primary_dark p-1"
            color="success"
          />
          <span className={`mt-1 font-josefin text-sm`}>{technology}</span>
        </div>
      ))}
    </div>
  );
}
