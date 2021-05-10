import React from "react";
import { useSelector } from "react-redux";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./App.css";
import Header from "./components/Header/Header";
import NominationsContainer from "./components/Nominations/NominationsContainer/NominationsContainer";
import SearchContainer from "./components/Search/SearchContainer/SearchContainer";
import NominationsCompleted from "./components/Nominations/NominationsCompleted/NominationsCompleted";

// want Header, then Search, below Search we want section for nominations and then search results
const App = () => {
  const completedNominations = useSelector(
    (state) => state.nominations.completedNominations
  );

  return (
    <div>
      { completedNominations ? <NominationsCompleted /> : null }
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
