import { Levels } from "@/helper/Level";
import { Tooltip } from "@mui/material";
import clsx from "clsx";

export default function Level({ rank }: { rank: number }) {
  return (
    <div className=" flex gap-1 bg-primary/50 py-1 px-2 rounded-3xl childTranslateZ">
      {Levels.map((level) => (
        <Tooltip title={level.description}>
          <div
            className={clsx({
              "rounded-full w-4 h-4 border-[1px] border-secondary/40 ": true,
              "bg-secondary": level.rank <= rank,
            })}
            key={level.rank}
          />
        </Tooltip>
      ))}
    </div>
  );
}
