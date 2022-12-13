import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Arrow from "../assets/img/arrow.png";
import Cycle1 from "../assets/img/cycle1.png";
import Best from "../assets/img/best-getest-small.png";
import Rupee from "../assets/img/500.png";
const BlackContainer = () => {
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
        <Col className=" m-0 p-0">
          <div className="Carousel p-5 ">
            <img src={Cycle1} className={"img-fluid"} alt="" />
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
