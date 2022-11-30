import React from "react";
import {  Container, Row } from "react-bootstrap";
import logo from "../assets/img/fietstest-logo.png";
import ADR from "../assets/img/ADR.png";
import logos from "../assets/img/logos.png";

const Header = () => {
  return (
    <Row className="Header">
      <Container className="d-flex">
        <img src={logo} alt="Logo" className="img-fluid" />

        <div className="ml-auto d-none d-md-block">
          <img src={ADR} alt="Logo" className="img-fluid mr-3 my-auto" />

          <img src={logos} alt="Logo" className="img-fluid" />
        </div>
      </Container>
    </Row>
  );
};

export default Header;
