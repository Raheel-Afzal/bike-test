import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Arrow from "../assets/img/arrow.png";
import testmaand from "../assets/img/testmaand.png";
import stars from "../assets/img/black-sticker-img.png";
import pin from "../assets/img/map-pin.png";
const Experience = () => {
  return (
    <Row className="mx-0 my-5">
      <Col sm={12} lg={7} className="exp-bg"></Col>

      <Col className="col-sm-12 col-lg-5 ">
        <Container className="exp-card shadow-lg my-4 ">
          <p className="exp-title">Ons Experience center</p>
          <p>
            {" "}
            In ons Experience Center staan meer dan 100 elektrische fietsen van
            35 merken. Plan jouw eigen fietstest en test er 1, 2 of test ze
            allemaal!{" "}
          </p>
          <Button className="exp-btn">
            Plan nu een gratis testrit
            <img src={Arrow} alt="next" className=" ml-3" />
          </Button>
        </Container>

        <div className="address mb-4 d-flex justify-content-center align-items-center">
          <Container className="sticker-sm no-gutters">
            <img src={stars} alt="" />
            <p className="sticker-text">DECEMBER</p>
            <img src={testmaand} alt="" />
          </Container>

          <img src={pin} height="30px" className="ml-4 mr-2 mb-4" alt="pin" />
          <p className="mt-3">
            <b>Experience Center</b>
            <br />
            Savannahweg 64, 3542 AW Utrecht
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Experience;
