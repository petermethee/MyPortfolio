import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import { ButtonBase, IconButton } from "@mui/material";
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
      <IconButton
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
      >
        <ArrowBackRounded />
      </IconButton>

      <IconButton
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
      >
        <ArrowForwardRounded />
      </IconButton>
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
          <div className="relative h-40 px-5" key={index}>
            <ButtonBase
              sx={{
                position: "absolute",
                inset: "0 1.25rem",
              }}
              className="rounded-md"
              onClick={() => {}}
            />

            <Image
              src={image}
              alt="image"
              className="h-full w-full max-w-none cursor-pointer rounded-md bg-background object-cover shadow-xl duration-300 hover:scale-110"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
