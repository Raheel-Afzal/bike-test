import React from "react";
import BlackContainer from "../components/BlackContainer";
import GreyBoard from "../components/GreyBoard";
import Quotation from "../components/Quotation";
import WhiteRibbon from "../components/WhiteRibbon";
import Wie from "../components/Wie"
const MainView = () => {
  return (
    <>
      <BlackContainer />
      <WhiteRibbon />
      <GreyBoard/>
      <Wie/>
      <Quotation/>
    </>
  );
};

export default MainView;
