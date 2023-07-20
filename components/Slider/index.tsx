import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SLickProps {
  children: ReactNode;
  SliderRef: any;
  vertical?: boolean;
  rtl?: boolean;
  autoplay?: boolean;
  cssEase?: string | undefined;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
}

const SlickSlider = ({
  children,
  SliderRef,
  vertical,
  rtl,
  autoplay,
  autoplaySpeed = 8000,
  pauseOnHover = false,
  pauseOnFocus = false,
}: SLickProps) => {
  const settings = {
    draggable: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: false,
    autoplaySpeed,
    pauseOnHover,
    pauseOnFocus,
  };

  return (
    <div>
      <Slider
        cssEase="ease-in-out"
        rtl={rtl}
        vertical={vertical}
        ref={SliderRef}
        {...settings}
        arrows={false}
        pauseOnHover={pauseOnHover}
        pauseOnFocus={pauseOnFocus}
      >
        {children}
      </Slider>
    </div>
  );
};

export default SlickSlider;
