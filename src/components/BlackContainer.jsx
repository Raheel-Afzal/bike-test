import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Arrow from "../assets/img/arrow.png";
import * as myCycles from "./Images/CycleImages";
import Best from "../assets/img/best-getest-small.png";
import Rupee from "../assets/img/500.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const BlackContainer = () => {
  const CyclesImages = [
    myCycles.Cycle1,
    myCycles.Cycle2,
    myCycles.Cycle3,
    myCycles.Cycle4,
    myCycles.Cycle5,
  ];
  return (
    <Container fluid className="Black_Container  py-md-5">
      <Row className=" align-items-center ">
        <Col className="offset-md-1">
          <h2 className="MV_title">
            <span>December</span> test maand <br />
            <span className="text-white">Bij Fietstest.Nl</span>
          </h2>
          <p className="mt-2 mt-md-4 mr-md-5 MV_Para">
            {" "}
            Kom gratis een e-bike testen bij de grootste e-bike testcenter van
            Nederland!{" "}
          </p>
          <Button className="MV_btn mt-3" variant="secondary">
            <span className="mr-4">Plan nu een gratis testrit</span>
            <img src={Arrow} alt="arrow" />
          </Button>
          <br />
          <span className="MV_txtSmall">
            Let op: beperkt aantal testplekken beschikbaar.
          </span>
        </Col>
        <Col lg={6} className=" m-0 p-0">
          <div className="Carousel p-5 ">
            <Swiper
              
              spaceBetween={30}
              centeredSlides={true}
             
              pagination={{
                clickable: true,
              }}
              modules={[ Pagination]}
              className="mySwiper"
            >
              {CyclesImages.map((image) => {
                return (
                  <SwiperSlide key={image}>
                    <img src={image} alt="" className="w-100" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div>
            <button className="Crousel_btn "></button>
            <button className="Crousel_btn "></button>
            <button className="Crousel_btn "></button>
            <button className="Crousel_btn "></button>
            <button className="Crousel_btn "></button>
            <button className="Crousel_btn "></button>
            <button className="Crousel_btn "></button>
          </div>

          <img src={Best} className="position-absolute best-sm " alt="" />
          <img src={Rupee} className="position-absolute rupee w-25" alt="" />
        </Col>
      </Row>
    </Container>
  );
};
export default BlackContainer;
