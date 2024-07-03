import Particles from "@tsparticles/react";
import React from "react";
import { accent } from "../../../theme";

function ExtendedParticles() {
  return (
    <Particles
      id="tsparticles"
      url=""
      options={{
        autoPlay: true,
        background: {
          size: "50%",
        },
        clear: true,
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onDiv: {
              selectors: [],
              enable: true,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: true,
              mode: ["bubble", "connect"],
              parallax: {
                enable: false,
                force: 100,
                smooth: 5,
              },
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 100,
              duration: 2,
              mix: true,
              opacity: 8,
              size: 6,
            },
            connect: {
              distance: 100,
              links: {
                opacity: 0.5,
              },
              radius: 0,
            },
            grab: {
              distance: 400,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
            slow: {
              factor: 1,
              radius: 0,
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#791313",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
          },
        },
        manualParticles: [],
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
            value: [accent],
          },

          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000,
              },
            },
            center: {
              x: 50,
              y: 50,
              mode: "percent",
              radius: 0,
            },
            enable: true,
            outModes: {
              default: "bounce",
              bottom: "bounce",
              left: "bounce",
              right: "bounce",
              top: "bounce",
            },
            random: false,
            size: false,
            speed: 1,
          },
          number: {
            value: 300,
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
          shadow: {
            blur: 0,
            color: {
              value: "#000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            close: true,
            fill: true,
            options: {},
            type: "circle",
          },
          size: {
            value: 2,
          },
          stroke: {
            width: 0,
          },
          zIndex: {
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
          links: {
            blink: false,
            color: {
              value: ["#c9c9c9ff"],
            },
            consent: false,
            distance: 40,
            enable: true,
            frequency: 0.7,
            opacity: 0.4,
            shadow: {
              blur: 5,
              color: {
                value: "#000",
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 0.5,
            },
            width: 1,
            warp: false,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        smooth: false,
        style: {},
        themes: [],
        zLayers: 100,
        name: "Polygon Mask",
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
        polygon: {
          draw: {
            enable: false,
            stroke: {
              color: {
                value: "#fff",
              },
              width: 1,
              opacity: 0.2,
            },
          },
          enable: true,
          inline: {
            arrangement: "equidistant",
          },
          move: {
            radius: 10,
            type: "path",
          },
          scale: 0.8,
          type: "inside",
          url: "/google.svg",
          position: {
            x: 0,
            y: 100,
          },
        },
      }}
    />
  );
}

export default React.memo(ExtendedParticles);
