import React from "react";
import classes from "./Nomination.module.css";
import imagePlaceholder from "./movie-placeholder.jpg";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBRipple,
} from "mdb-react-ui-kit";

const Nomination = (props) => {
  const image = props.img === "N/A" ? imagePlaceholder : props.img;

  return (
    <TransitionGroup component="div" className={classes.nomination_container}>
      <MDBCard style={{ maxWidth: "400px" }}>
        <MDBRow className="g-0">
          <MDBCol size="4">
            <MDBCardImage
              src={image}
              className="img-thumbnail"
              alt={`${props.title} movie poster`}
              fluid
            />
          </MDBCol>
          <MDBCol size="8">
            <MDBCardBody>
              <MDBCardTitle>{props.title}</MDBCardTitle>
              <MDBCardText>{props.year} • <span className={classes.genres}>{props.genres}</span></MDBCardText>
              <MDBRipple
                rippleColor="light"
                size="md"
                style={{ backgroundColor: "#008060" }}
                onClick={props.remove}
              >
                Remove
              </MDBRipple>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </TransitionGroup>
  );
};

export default Nomination;
