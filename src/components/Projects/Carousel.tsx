import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { ButtonBase, IconButton, Modal } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Carousel({ images }: { images: StaticImport[] }) {
  const sliderRef = useRef<Slider>(null);
  const [open, setOpen] = useState(false); // Gère l'état de la modal
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const handleOpen = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="absolute left-1/2 top-1/2 flex h-[70%] w-[80%] max-w-screen-lg -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-white/20 px-14 shadow-md backdrop-blur-lg">
          {selectedImageIndex !== null && (
            <>
              <Image
                src={images[selectedImageIndex]}
                alt=""
                className="h-full w-auto object-contain"
              />
              <IconButton
                disabled={selectedImageIndex === images.length - 1}
                onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                sx={{
                  position: "absolute",
                  right: 2,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                color="secondary"
              >
                <ArrowForwardIosRounded />
              </IconButton>
              <IconButton
                disabled={selectedImageIndex === 0}
                onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                sx={{
                  position: "absolute",
                  left: 2,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                color="secondary"
              >
                <ArrowBackIosRounded />
              </IconButton>
            </>
          )}
        </div>
      </Modal>
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
          swipeToSlide
          dots
          infinite={false}
          slidesToShow={3}
          arrows={false}
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
              <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-md bg-background shadow-md">
                <IconButton
                  className="invisible group-hover:visible"
                  sx={{
                    position: "absolute",
                    zIndex: 10,
                  }}
                  onClick={() => handleOpen(index)}
                >
                  <VisibilityRoundedIcon />
                </IconButton>

                <Image
                  src={image}
                  alt={""}
                  className="h-full max-w-none object-contain duration-300 group-hover:brightness-50"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
