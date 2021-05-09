import React from "react";
import classes from "./Nomination.module.css";
import imagePlaceholder from "./movie-placeholder.jpg";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Nomination = (props) => {
  const image = props.img === "N/A" ? imagePlaceholder : props.img;

  return (
    <div className={classes.nomination_container}>
      <MDBCard style={{ maxWidth: "400px" }}>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src={image}
              className="img-thumbnail"
              alt={`${props.title} movie poster`}
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{props.title}</MDBCardTitle>
              <MDBCardText>{props.year}</MDBCardText>
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
    </div>
  );
};

export default Nomination;
