import React from "react";
import cycle from "../assets/img/orangeCycle.png";

export function ProgressBar(props) {
  return (
    <div className="d-flex align-items-end my-3">
      <div>
        <h2 className="mb-0 text-right Board_Number">{props.ProgressNumber}</h2>
        <div className={props.myClassName}></div>
      </div>
      <img src={cycle} alt="cycle" className="mx-3 " />
      <p className="progress-text"> {props.ProgressText} </p>
    </div>
  );
}
