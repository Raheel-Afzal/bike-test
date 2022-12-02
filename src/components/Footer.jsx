import React from "react";
import { Container, Row } from "react-bootstrap";
import FooterImg from "../assets/img/logo-footer.png";
const Footer = () => {
  return (
    
      <Container fluid className="d-flex footer">
        <img src={FooterImg} alt="logo" />
      </Container>
    
  );
};

export default Footer;
