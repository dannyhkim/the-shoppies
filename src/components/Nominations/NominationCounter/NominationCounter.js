import React from "react";
import classes from "./NominationCounter.module.css";

const NominationCounter = (props) => {
  return (
    <div className={classes.counter}>
      <p>
        Nominations <span>{props.length}/5</span>
      </p>
    </div>
  );
};

export default NominationCounter;
