import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./App.css";
import Header from "./components/Header/Header";
import NominationsContainer from "./components/Nominations/NominationsContainer/NominationsContainer";
import SearchContainer from "./components/Search/SearchContainer/SearchContainer";

// want Header, then Search, below Search we want section for nominations and then search results
const App = () => {
  return (
    <div>
      <MDBContainer>
        <Header header="The Shoppies" />
        <MDBRow>
          <MDBCol md="5">
            <NominationsContainer />
          </MDBCol>
          <MDBCol md="7">
            <SearchContainer />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default App;
