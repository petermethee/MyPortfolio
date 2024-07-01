import React from "react";
import Particles from "@tsparticles/react";
import { defaultWhite, primaryColor, secondaryColor } from "../../../theme";

function ExtendedParticles() {
  return (
    <Particles
      id="tsparticles"
      // particlesLoaded={async () => console.log("loaded")}
      options={{
        background: {
          color: defaultWhite,
        },
        style: {
          top: "3rem",
          height: "calc(100vh - 3rem)",
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["repulse"],
            },
          },
          modes: {
            grab: {
              distance: 200,
            },
          },
        },

        particles: {
          collisions: {
            enable: true,
          },
          color: {
            value: [primaryColor, secondaryColor],
          },
          links: {
            color: primaryColor,
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              startValue: "random",
            },
            value: {
              min: 0.1,
              max: 0.8,
            },
          },
          shape: {
            type: ["circle"],

            /* options: {

                  image: [
                    {
                      src: eur,
                    },
                  ],
                }, */
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              mode: "random",
              speed: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default React.memo(ExtendedParticles);
