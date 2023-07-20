import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SLickProps {
  children: ReactNode;
  SliderRef: any;
  vertical?: boolean;
  rtl?: boolean;
  arrows?: boolean;
}

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div>
      <h1
        className="top-1/2 cursor-pointer transform bg-[white] shadow-xl flex items-center justify-center p-4 sm:p-5 z-[1000] w-4 h-4 sm:w-7 sm:h-7 rounded-full -translate-y-1/2 -left-3 absolute"
        onClick={onClick}
      >
        &#10094;
      </h1>
    </div>
  );
};
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div>
      <h1
        className="top-1/2 cursor-pointer transform bg-[white] shadow-xl flex items-center justify-center p-4 sm:p-5 z-[1000] w-4 h-4 sm:w-7 sm:h-7 rounded-full -translate-y-1/2 -right-3 absolute"
        onClick={onClick}
      >
        &#x276F;
      </h1>
    </div>
  );
};

const CustomizedSlickSlider = ({
  children,
  SliderRef,
  vertical,
  rtl,
  arrows,
}: SLickProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider
        arrows={arrows}
        rtl={rtl}
        vertical={vertical}
        ref={SliderRef}
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
};

export default CustomizedSlickSlider;
