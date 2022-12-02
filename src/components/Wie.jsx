import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Arrow from "../assets/img/arrow.png"
import best from "../assets/img/best-getest-large.png"
import ADR from "../assets/img/ADR.png"
const Wie = () => {
  return (
    <div className="wie_bg">
      <Row className="pt-5">
        <Col md={7} className="wie-box">
          <Row>
            <Col>
              <h2 className="wie-title">Wie is Fietstest.nl?</h2>
              <p className="wie-para">
                {" "}
                In samenwerking met ADR Nieuwsmedia (AD en zeven regionale
                nieuwstitels) doet Fietstest.nl elk jaar een nieuwe fietstest.
                Bekende fietsmerken gebruiken voor hun product een keurmerk van
                Fietstest.nl. Dit geeft aan dat je te maken hebt met een
                betrouwbare en onafhankelijk testpanel.
                <br/>
                <br/>
                Er zijn tientallen merken waaruit je kan kiezen en allemaal
                beweren ze de allerbeste te zijn. Fietstest.nl helpt je op weg.{" "}
              </p>
              <Button className="wie-btn">               
                  Plan nu een gratis testrit               
                <img  src={Arrow} alt="" className="ml-4"/>
              </Button>
            </Col>
          </Row>
          <img src={best} alt="" className="Wie-best d-md-block d-none" />
          <img src={ADR} alt="" className="Wie-Adr d-md-block d-none" />
        </Col>
      </Row>
    </div>
  );
};

export default Wie;
