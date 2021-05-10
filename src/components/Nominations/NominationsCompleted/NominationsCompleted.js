import React from "react";
import classes from './NominationsCompleted.module.css';
import { MDBContainer } from "mdb-react-ui-kit";

const NominationsCompleted = () => {
  return (
      <MDBContainer fluid className={classes.banner}>
        <p className={classes.banner_message}>Congratulations! You have nominated 5 movies for The Shoppies. Remove any movie in order to select a different one.</p>
      </MDBContainer>
  );
};

export default NominationsCompleted;
