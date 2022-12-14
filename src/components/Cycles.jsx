import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import * as myCycles from "./Images/CycleImages";
import Arrow from "../assets/img/arrow.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Cycles = () => {
  const swiperRef = useRef();

  const CyclesImages = [
    myCycles.Cycle1,
    myCycles.Cycle2,
    myCycles.Cycle3,
    myCycles.Cycle4,
    myCycles.Cycle5,
  ];

  return (
    <Container fluid className="my-5 text-center">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={50}
        className="mySwiper"
        slidesPerView={3}
        loop={true}
      >
        {CyclesImages.map((image) => {
          return (
            <SwiperSlide key={image}>
              {({ isNext, isActive }) => (
                <img
                  src={image}
                  alt="cycle"
                  className="w-100 cycles-slider"
                  style={isNext ? { opacity: 1 } : { opacity: 0.5 }}
                  onClick={() => {
                    isActive && swiperRef.current.slidePrev();
                    !isNext && swiperRef.current.slideNext();
                  }}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Container>
        <Button className="cycles_btn mt-5" variant="secondary">
          <span className="mr-4">Plan nu een gratis testrit</span>
          <img src={Arrow} alt="arrow" />
        </Button>{" "}
      </Container>
    </Container>
  );
};

export default Cycles;
