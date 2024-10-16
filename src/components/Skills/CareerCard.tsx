import AmazingCard from "../shared/AmazingCard";
import { TCareerEvent } from "./Career";
import style from "./CareerCard.module.css";
export default function CareerCard({ event }: { event: TCareerEvent }) {
  return (
    <AmazingCard
      className={`w-full rounded-xl bg-background px-4 pb-4 pt-2 ${style.card} `}
      glare
      fullWidth
      thresholdY={20}
    >
      <div className="flex flex-col gap-1">
        <div className={`font-josefin flex justify-between`}>
          <span className="text-sm text-text/80">{event.location}</span>
          {event.contract && (
            <span className="rounded-xl bg-primary px-2 pt-[3px] text-xs text-secondary">
              {event.contract}
            </span>
          )}
        </div>

        {event.title}
      </div>
    </AmazingCard>
  );
}
