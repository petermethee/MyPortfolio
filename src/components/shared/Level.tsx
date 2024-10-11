import { Levels } from "@/helper/Level";
import { Tooltip } from "@mui/material";
import clsx from "clsx";

export default function Level({ rank }: { rank: number }) {
  return (
    <Tooltip
      title={Levels.find((level) => level.rank === rank)?.description}
      arrow
    >
      <div className="childTranslateZ flex gap-1 rounded-3xl bg-primary px-2 py-1">
        {Levels.map((level) => (
          <div
            className={clsx({
              "h-4 w-4 rounded-full border-[1px] border-secondary/40": true,
              "bg-secondary": level.rank <= rank,
            })}
            key={level.rank}
          />
        ))}
      </div>
    </Tooltip>
  );
}
