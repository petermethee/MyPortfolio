import Cards from "@/components/shared/Cards";
import DescriptionZone from "@/components/shared/DescriptionZone";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import HttpRoundedIcon from "@mui/icons-material/HttpRounded";
/* 
Framework



React 4/5 

Angular 3/5

NectJS 3/5



Autre

Electron 4/5

NodeJS 4/5  

 */
const skills = [
  {
    title: "Frontend",
    icon: <DesktopWindowsRoundedIcon />,
    items: [
      {
        title: "Languages",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "Javascript",
            level: 4,
          },
          {
            name: "Typescript",
            level: 4,
          },
          {
            name: "HTML",
            level: 4,
          },
          {
            name: "CSS",
            level: 4,
          },
          {
            name: "HTTP",
            level: 4,
          },
        ],
      },
      {
        title: "Frameworks",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "React",
            level: 4,
          },
          {
            name: "Angular",
            level: 4,
          },
          {
            name: "NextJS",
            level: 4,
          },
        ],
      },
      {
        title: "Autre",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "Electron",
            level: 4,
          },
          {
            name: "NodeJS",
            level: 4,
          },
        ],
      },
    ],
  },
];

export default function SkillPage() {
  return (
    <div className=" max-w-screen-lg mx-auto px-10 py-24">
      <div className="flex flex-wrap justify-evenly">
        <Cards
          className="p-4 rounded-xl  bg-background w-[20rem] group shadow-xl"
          icon={<DesktopWindowsRoundedIcon />}
          title="Frontend"
        >
          <DescriptionZone
            icon={<HttpRoundedIcon />}
            title={"Languages"}
            text={<div>Typescript 4/5 Javascript 4/5 HTML 4/5 CSS 4/5</div>}
            // className={styles.descriptionZone}
          />
        </Cards>
      </div>
    </div>
  );
}
