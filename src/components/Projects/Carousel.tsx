import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Carousel({ images }: { images: StaticImport[] }) {
  const sliderRef = useRef<Slider>(null);
  return (
    <div
      className="relative mt-2 overflow-hidden bg-secondary/10 py-8"
      style={{
        boxShadow:
          "inset 0px -20px 20px -25px #000, inset 0px 20px 20px -25px #000",
      }}
    >
      <div className="absolute left-0 top-0 z-10 flex h-full items-center justify-center px-2 backdrop-blur-md duration-300 hover:bg-primary/10 hover:px-5">
        <ButtonBase
          sx={{
            position: "absolute",
            inset: "0 0",
          }}
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <ArrowBackIosRounded />
      </div>

      <div className="absolute right-0 top-0 z-10 flex h-full items-center justify-center px-2 backdrop-blur-md duration-300 hover:bg-primary/10 hover:px-5">
        <ButtonBase
          sx={{
            position: "absolute",
            inset: "0 0",
          }}
          onClick={() => sliderRef.current?.slickNext()}
        />
        <ArrowForwardIosRounded />
      </div>
      <style>
        {`
          .slick-dots li button:before {
            color: var(--primary);
            opacity: 0.5; 
          }
          .slick-dots li.slick-active button:before {
            color: var(--secondary);
          }
  `}
      </style>
      <Slider
        ref={sliderRef}
        centerMode
        swipeToSlide
        dots
        slidesToShow={3}
        arrows={false}
        autoplay
        pauseOnHover
        autoplaySpeed={3000}
        className="text-text"
        responsive={[
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {images.map((image, index) => (
          <div className="h-80 px-5 duration-300 hover:scale-110" key={index}>
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-md bg-background shadow-md">
              <ButtonBase
                sx={{
                  position: "absolute",
                  inset: "0 0",
                }}
                onClick={() => {}}
              />
              <Image
                src={image}
                alt={""}
                className="h-full max-w-none object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
