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
  MDBIcon,
} from "mdb-react-ui-kit";

const Nomination = (props) => {
  const image = props.img === "N/A" ? imagePlaceholder : props.img;

  return (
    <div className={classes.nomination_container}>
      <MDBCard style={{ maxWidth: "540px" }}>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src={image}
              alt={`${props.title} movie poster`}
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{props.title}</MDBCardTitle>
              <MDBCardText>{props.year}</MDBCardText>
              <MDBBtn color="primary" onClick={props.remove}>
                <MDBIcon icon="minus-circle" className="mr-1" /> Remove
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
};

export default Nomination;
