import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Arrow from "../assets/img/arrow.png";
import Cycle1 from "../assets/img/cycle1.png";
import Best from "../assets/img/best-getest-small.png";

const BlackContainer = () => {
  return (
    <div className="Black_Container py-2 py-md-5">
      <Row className=" align-items-center ">
        <Col className="offset-md-1">
          <h2 className="MV_title">
            <span>November</span> test maand <br />
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
        <Col md={6}>
          <img src={Best} class="position-absolute best-sm" alt=""></img>
          <div class="Carousel p-5">
            <img src={Cycle1} alt="" />
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
        </Col>
      </Row>
    </div>
  );
};
export default BlackContainer;
