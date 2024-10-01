import CareerBubble from "./CareerBubble";
import CareerCard from "./CareerCard";

export type TCareerEvent = {
  date: string;
  title: string;
  projet?: string;
  duration: string;
  location: string;
  contract?: string;
};
export default function Career() {
  const events: TCareerEvent[] = [
    {
      date: "2018",
      title: "Ecole Ingénieur Généraliste - Arts et Métiers",
      duration: "3 ans",
      location: "Aix-en-Provence, France",
    },
    {
      date: "2019",
      title: "Parfumerie Mireille",
      projet: "Application Web - Outils interne à l'entreprise",
      duration: "4 mois",
      location: "Sorgues - Remote à Aix en Provence",
      contract: "CDD",
    },
    {
      date: "2020",
      title: "Ingeneria y Controles Automatizados",
      projet: "Application mobile - Outils interne à l'entreprise",
      duration: "3 mois",
      location: "Panama City, Panama",
      contract: "SFE",
    },
    {
      date: "2021",
      title: "Diplôme d'ingénieur généraliste",
      location: "Aix-en-Provence, France",
      duration: "2 ans",
    },
    {
      date: "2022",
      title: "AViSTO",
      contract: "CDI",
      location: "Aix-en-Provence, France",
      duration: "",
    },
  ];

  return (
    <div className="mx-auto w-fit flex flex-col-reverse">
      {events.map((event, index) => (
        <div key={event.title} className="flex gap-10 items-center">
          <CareerBubble
            date={event.date}
            first={index === 0}
            last={index === events.length - 1}
          />
          <CareerCard event={event} />
        </div>
      ))}
    </div>
  );
}
