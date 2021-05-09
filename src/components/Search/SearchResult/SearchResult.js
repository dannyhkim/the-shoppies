import React from "react";
import imagePlaceholder from "./movie-placeholder.jpg";
import classes from "./SearchResult.module.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

const SearchResult = (props) => {
  const image = props.img === "N/A" ? imagePlaceholder : props.img;

  return (
    <div className={classes.container}>
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol lg="3">
            <MDBCardImage
              style={{ maxWidth: "100px" }}
              src={image}
              alt={`${props.title} movie poster`}
              fluid
            />
          </MDBCol>
          <MDBCol lg="9">
            <MDBCardBody>
              <MDBCardTitle>{props.title}</MDBCardTitle>
              <MDBCardText>
                {props.year} • {props.type}
              </MDBCardText>
              <MDBBtn
                style={{ backgroundColor: '#008060' }}
                disabled={props.disable}
                onClick={props.handleClick}
              >
                {!props.disable ? "Nominate" : "Nominated"}
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
};
export default SearchResult;
