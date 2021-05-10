import React from "react";
import classes from "./SearchResult.module.css";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";

const SearchResult = (props) => {

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
