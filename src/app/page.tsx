import Cards from "@/components/Cards/Cards";
import Hero from "@/components/Hero/Hero";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import { secondary } from "../../theme";
const qualities = [
  {
    title: "Compétences",
    description:
      "Je maîtrise les frameworks et outils essentiels pour réaliser des applications web performantes et sur-mesure.",

    icon: <ArchitectureRoundedIcon />,
    color: secondary,
  },
  {
    title: "Confiance",
    description:
      "Respect des délais et communication transparente, je m'engage à livrer des projets de qualité en assurant un suivi rigoureux.",

    icon: <HandshakeRoundedIcon />,
    color: secondary,
  },
  {
    title: "Esprit d'équipe",
    description:
      "Collaboratif, curieux et à l'écoute, je travaille efficacement en équipe et je m'épanouis à échanger mes connaissances avec d'autres passionnés.",

    icon: <Diversity1RoundedIcon />,
    color: secondary,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex justify-evenly gap-10 p-8 flex-wrap mt-16">
        {qualities.map((quality) => (
          <Cards
            key={quality.title}
            title={quality.title}
            description={quality.description}
            icon={quality.icon}
            color={quality.color}
          />
        ))}
      </div>
    </>
  );
}
