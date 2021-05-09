import React, { Fragment } from "react";
import classes from "./SearchError.module.css";
import {MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle} from 'mdb-react-ui-kit';

const SearchError = (props) => {
  return (
    <Fragment>
      <MDBCard shadow='0' border='light' background='white' className='mb-3'>
        <MDBCardHeader>{props.error}</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Change your search terms.</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </Fragment>
  );
};

export default SearchError;
