import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Header from "./components/Header/Header";
import NominationsContainer from "./components/Nominations/NominationsContainer/NominationsContainer";
import SearchContainer from "./components/Search/SearchContainer/SearchContainer";

// want Header, then Search, below Search we want section for nominations and then search results
const App = () => {
  return (
    <div>
      <Header header="The Shoppies" />
      <Container>
        <Row>
          <Col md={6}>
            <NominationsContainer />
          </Col>
          <Col md={6}>
            <SearchContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
