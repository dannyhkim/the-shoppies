import React from "react";

const Header = (props) => {
  return (
    <header className="App-header">
      <h2>{props.header}</h2>
    </header>
  );
};

export default Header;
