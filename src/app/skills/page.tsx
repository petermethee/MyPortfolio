import Cards from "@/components/shared/Cards";
import DescriptionZone from "@/components/shared/DescriptionZone";
import Level from "@/components/shared/Level";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import HttpRoundedIcon from "@mui/icons-material/HttpRounded";

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
        {skills.map((skill) => (
          <Cards
            key={skill.title}
            className="p-4 bg-[#354050] rounded-xl w-[20rem] group shadow-xl gap-3 flex flex-col groupTranslateZ"
            icon={skill.icon}
            title={skill.title}
            glare
            thresholdX={10}
            thresholdY={20}
          >
            {skill.items.map((item) => (
              <DescriptionZone
                key={item.title}
                icon={item.icon}
                title={item.title}
                className="bg-[#0000004b] w-full childTranslateZ"
                text={
                  <div
                    className="flex flex-col gap-2 w-full"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {item.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex justify-between"
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <span>{skill.name}</span>
                        <Level rank={skill.level} />
                      </div>
                    ))}
                  </div>
                }
                dashed
              />
            ))}
          </Cards>
        ))}
      </div>
    </div>
  );
}
