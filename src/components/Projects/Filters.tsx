import {
  ETheme,
  EWorkspace,
  ThemeIcons,
  WorkspaceIcons,
} from "@/models/EThemes";

export default function Filters({
  theme,
  workspace,
  setTheme,
  setWorkspace,
}: {
  workspace: EWorkspace;
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
  setWorkspace: (workspace: EWorkspace) => void;
}) {
  return (
    <div
      className="sticky top-0 hidden h-fit w-48 flex-col gap-2 rounded-md bg-background p-2 sm:flex"
      style={{
        boxShadow: "0px 0px 40px -20px var(--primary_light)",
      }}
    >
      {Object.values(EWorkspace).map((filter) => (
        <div
          key={filter}
          className={`flex w-full cursor-pointer items-center gap-4 rounded-sm px-2 py-2 font-josefin transition-all ${filter === workspace ? "bg-primary text-secondary" : "bg-primary_dark hover:bg-primary/60"}`}
          onClick={() => setWorkspace(filter)}
        >
          {WorkspaceIcons[filter]}
          <div className="-mb-1">{filter}</div>
        </div>
      ))}
      <br />
      <span className="font-bold uppercase text-text/80">Thèmes</span>
      {Object.values(ETheme).map((curTheme) => (
        <div
          key={curTheme}
          className={`flex w-full cursor-pointer items-center gap-4 rounded-sm px-2 py-2 font-josefin transition-all ${curTheme === theme ? "bg-primary text-secondary" : "bg-primary_dark hover:bg-primary/60"}`}
          onClick={() => setTheme(curTheme)}
        >
          {ThemeIcons[curTheme]}
          <div className="-mb-1">{curTheme}</div>
        </div>
      ))}
    </div>
  );
}
