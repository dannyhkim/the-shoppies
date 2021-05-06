import React from "react";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>{props.header}</h1>
        <p>Movie awards for entrepreneurs - nominate your 5 favourite movies</p>
      </header>
    </div>
  );
};

export default Header;
