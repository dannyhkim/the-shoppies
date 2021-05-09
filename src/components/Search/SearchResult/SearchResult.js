import React from "react";
import imagePlaceholder from "./movie-placeholder.jpg";
import classes from "./SearchResult.module.css";
import {
  MDBCard,
  MDBCardHeader,
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
      <MDBCard background="light" className="mb-3">
        <MDBCardHeader>{props.title}</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>
            {props.year} • {props.type}
          </MDBCardTitle>
          <MDBBtn
            style={{ backgroundColor: "#008060" }}
            disabled={props.disable}
            onClick={props.handleClick}
          >
            {!props.disable ? "Nominate" : "Nominated"}
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
export default SearchResult;
