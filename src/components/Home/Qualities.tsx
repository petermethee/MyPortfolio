import { standardFont } from "@/app/layout";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

export default function Qualities() {
  const qualities = [
    {
      title: "Compétences",
      description:
        "Je maîtrise les frameworks et outils essentiels pour réaliser des applications web performantes et sur-mesure.",

      icon: <CodeRoundedIcon fontSize="large" />,
      color: "#1e5969",
    },
    {
      title: "Confiance",
      description:
        "Respect des délais et communication transparente, je m'engage à livrer des projets de qualité en assurant un suivi rigoureux.",

      icon: <HandshakeRoundedIcon fontSize="large" />,
      color: "#a07a57",
    },
    {
      title: "Esprit d'équipe",
      description:
        "Collaboratif, curieux et à l'écoute, je travaille efficacement en équipe et je m'épanouis à échanger mes connaissances avec d'autres passionnés.",

      icon: <Diversity1RoundedIcon fontSize="large" />,
      color: "#2d8654",
    },
  ];
  return (
    <div className=" my-16 bg-background/30 backdrop-blur-[2px] p-8 border-y border-text/60 w-screen">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 max-w-screen-2xl mx-auto">
        {qualities.map((quality) => (
          <div
            key={quality.title}
            className="flex flex-col items-center max-w-sm gap-4"
          >
            <div
              className={`rounded-full p-4`}
              style={{ backgroundColor: quality.color }}
            >
              {quality.icon}
            </div>
            <span className="uppercase">{quality.title}</span>
            <span
              className="text-center text-sm"
              style={{ fontFamily: standardFont.style.fontFamily }}
            >
              {quality.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
