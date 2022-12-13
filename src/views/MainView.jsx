import React from "react";
import BlackContainer from "../components/BlackContainer";
import Cycles from "../components/Cycles";
import Experience from "../components/Experience";
import GreyBoard from "../components/GreyBoard";
import OnsTestPanel from "../components/OnsTestPanel";
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
      <OnsTestPanel/>
      <Cycles/>
      <Quotation/>
      <Experience/>
    </>
  );
};

export default MainView;
