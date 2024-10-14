import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import { primary_light, secondary, tertiary } from "../../theme";
export const qualities = [
  {
    title: "Compétences",
    description:
      "Je maîtrise les frameworks et outils essentiels pour réaliser des applications web performantes et sur-mesure.",

    icon: <CodeRoundedIcon fontSize="large" color="action" />,
    color: primary_light,
  },
  {
    title: "Confiance",
    description:
      "Respect des délais et communication transparente, je m'engage à livrer des projets de qualité en assurant un suivi rigoureux.",

    icon: <HandshakeRoundedIcon fontSize="large" color="action" />,
    color: secondary,
  },
  {
    title: "Esprit d'équipe",
    description:
      "Collaboratif, curieux et à l'écoute, je travaille efficacement en équipe et je m'épanouis à échanger mes connaissances avec d'autres passionnés.",

    icon: <Diversity1RoundedIcon fontSize="large" color="action" />,
    color: tertiary,
  },
];
