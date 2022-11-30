import React from "react";
import BlackContainer from "../components/BlackContainer";
import GreyBoard from "../components/GreyBoard";
import WhiteRibbon from "../components/WhiteRibbon";
const MainView = () => {
  return (
    <>
      <BlackContainer />
      <WhiteRibbon />
      <GreyBoard/>
    </>
  );
};

export default MainView;
