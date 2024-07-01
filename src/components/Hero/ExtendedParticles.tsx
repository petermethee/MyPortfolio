import Particles from "@tsparticles/react";
import React from "react";
import { primary, secondary } from "../../../theme";

function ExtendedParticles() {
  return (
    <Particles
      id="tsparticles"
      url=""
      options={{
        autoPlay: true,
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        particles: {
          bounce: {
            horizontal: {
              value: 1,
            },
            vertical: {
              value: 1,
            },
          },

          color: {
            value: [primary, secondary],
            animation: {
              h: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: true,
                offset: 0,
              },
              s: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: true,
                offset: 0,
              },
              l: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: true,
                offset: 0,
              },
            },
          },

          move: {
            decay: 0,
            distance: 0,
            direction: "none",
            drift: 0,
            enable: true,

            outModes: {
              default: "bounce",
              bottom: "bounce",
              left: "bounce",
              right: "bounce",
              top: "bounce",
            },
            random: true,
            speed: 1,
          },
          number: {
            density: {
              enable: false,
              width: 100,
              height: 1,
            },
            limit: {
              mode: "delete",
              value: 0,
            },
            value: 50,
          },
          opacity: {
            value: {
              min: 0.05,
              max: 0.4,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 2,
              decay: 0,
              delay: 0,
              sync: false,
              mode: "auto",
              startValue: "random",
              destroy: "none",
            },
          },
          reduceDuplicates: false,

          shape: {
            close: true,
            fill: false,
            options: {},
            type: "circle",
          },
          size: {
            value: 10,
          },

          links: {
            blink: false,
            color: {
              value: "random",
            },
            consent: false,
            distance: 40,
            enable: true,
            frequency: 1,
            opacity: 1,
            width: 2,
          },
        },

        polygon: {
          enable: true,
          inline: {
            arrangement: "equidistant",
          },
          move: {
            radius: 5,
            type: "path",
          },
          scale: 1,
          type: "inline",
          url: "/google.svg",
          position: {
            x: 3,
            y: 30,
          },
        },
      }}
    />
  );
}

export default React.memo(ExtendedParticles);
