import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import testmaand from "../assets/img/testmaand.png";
import stars from "../assets/img/black-sticker-img.png";
import WheelUp from "../assets/img/wheel-up.png";
import Cyclist from "../assets/img/cyclist-group.png";
import WhiteShirt from "../assets/img/white-shirt.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";


const OnsTestPanel = () => {
  const swiperRef = useRef();
  const myImages = [WheelUp, Cyclist, WhiteShirt];
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col lg={6}>
          <p className="ons-title">Ons testpanel</p>
          <p className="ons-Para">
            In 2022 laat Fietstest.nl in samenwerking met ADR Nieuwsmedia
            opnieuw een serie pas verschenen e-bikes testen door vrijwilligers.
          </p>

          <Container className="ons-card">
            <h6 className="ons-card-text">
              Meer dan
              <span>
                {" "}
                1900 onafhankelijke
                <br />
                panelleden
              </span>{" "}
              hebben
              <br />
              <span>492 elektrische fietsen</span>
              <br /> voor jou getest.
            </h6>
          </Container>

          <div className="ons-sticker  d-md-block d-none">
            <img src={stars} alt="" />
            <h2 className="m-0 mt-1">
              <b>DECEMBER</b>
            </h2>
            <img src={testmaand} alt="" />
          </div>
        </Col>
        <Col lg={6} sm={12} className="mt-2 mt-md-0 ">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable:true
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {myImages.map((image) => {
              return (
                <SwiperSlide
                  key={image}
                  onMouseEnter={() => {
                    swiperRef.current.autoplay.stop();
                  }}
                  onMouseLeave={() => {
                    swiperRef.current.autoplay.start();
                  }}
                >
                  <img src={image} alt="" className="w-100"/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default OnsTestPanel;
