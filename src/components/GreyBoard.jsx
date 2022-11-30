import { ProgressBar } from "./ProgressBar";
import React from "react";
import { Container } from "react-bootstrap";
import TestMaand from "../assets/img/testmaand.png";
import Stars from "../assets/img/black-sticker-img.png";
const GreyBoard = () => {
  return (
    <Container fluid className="grey_board py-5">
      <Container>
        <div class=" text-center sticker p-3 mt-3 position-absolute">
          <img src={Stars} alt="stars" />
          <h2 class="mb-0 mt-1" style={{ fontWeight: "700" }}>
            NOVEMBER
          </h2>
          <img src={TestMaand} alt="textmaand" />
        </div>

        <h2 className="GreyBoard_title">Hoe werkt het?</h2>

        <ProgressBar
          myClassName={"Progress_Bar1"}
          ProgressNumber={1}
          ProgressText={"Selecteer een datum en tijdstip naar wens"}
        />
        <ProgressBar
          myClassName={"Progress_Bar2"}
          ProgressNumber={2}
          ProgressText={"Test 1, 2 of meer fietsen op de openbare weg."}
        />
        <ProgressBar
          myClassName={"Progress_Bar3"}
          ProgressNumber={3}
          ProgressText={"Jouw gekozen e-bike is direct beschikbaar."}
        />
        <ProgressBar
          myClassName={"Progress_Bar4"}
          ProgressNumber={4}
          ProgressText={"Tot wel €500,- korting op de gekozen e-bike."}
        />
      </Container>
    </Container>
  );
};

export default GreyBoard;
