export default function CareerBubble({
  date,
  first,
  last,
}: {
  date: string;
  first: boolean;
  last: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-[2px] h-10 ${last ? "bg-transparent" : "bg-text/60"}`}
      />

      <div className="rounded-full w-16 h-16 bg-primary/30 backdrop-blur-sm flex justify-center items-center">
        {date}
      </div>
      <div
        className={`w-[2px] h-10 ${first ? "bg-transparent" : "bg-text/60"}`}
      />
    </div>
  );
}
