import { standardFont } from "@/app/layout";
import AmazingCard from "../shared/AmazingCard";
import { TCareerEvent } from "./Career";
import style from "./CareerCard.module.css";
export default function CareerCard({ event }: { event: TCareerEvent }) {
  return (
    <AmazingCard
      className={`bg-background pt-2 px-4 pb-4 rounded-xl w-full ${style.card}  `}
      glare
      fullWidth
      thresholdY={20}
    >
      <div className="flex flex-col gap-1">
        <div className={`flex justify-between  ${standardFont.className}`}>
          <span className="text-sm text-text/80">{event.location}</span>
          {event.contract && (
            <span className="text-xs rounded-xl pt-[3px] px-2  text-secondary bg-primary ">
              {event.contract}
            </span>
          )}
        </div>

        {event.title}
      </div>
    </AmazingCard>
  );
}
