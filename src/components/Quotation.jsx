import React from "react";
import { Container } from "react-bootstrap";
import Qoutations from "../assets/img/qoutations.png";
const Quotation = () => {
  return (
    <>
      <Container fluid className="Qouatation py-5 position-relative">
        <Container>
          <h6 className="qouation-line mt-5">
            ,,Fabrikanten hebben geen enkele invloed op de resultaten, de
            procedure is honderd procent onafhankelijk. Het testpanel is groot
            genoeg om een heel goede indicatie te geven van wat gebruikers van
            de nieuwste e-bikes vinden.''{" "}
          </h6>
          <p className="text-md-right text-center">
            - Frank Balfoort van Fietstest.nl (bron: AD)
          </p>
          <img
            src={Qoutations}
            alt=""
            className="testi__img"
          />
        </Container>
      </Container>
    </>
  );
};

export default Quotation;
