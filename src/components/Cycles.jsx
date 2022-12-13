import React from "react";
import { Button, Container } from "react-bootstrap";
import * as CyclesImages from "./Images/CycleImages";
import Arrow from "../assets/img/arrow.png";
const Cycles = () => {
  return (
    <Container fluid className="my-5 text-center">
      <img src={CyclesImages.Cycle1} alg="" />
      <img src={CyclesImages.Cycle2} alg="" />
      <img src={CyclesImages.Cycle3} alg="" />

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
