import React from "react";
import BlackContainer from "../components/BlackContainer";
import GreyBoard from "../components/GreyBoard";
import Quotation from "../components/Quotation";
import WhiteRibbon from "../components/WhiteRibbon";
const MainView = () => {
  return (
    <>
      <BlackContainer />
      <WhiteRibbon />
      <GreyBoard/>
      <Quotation/>
    </>
  );
};

export default MainView;
