import React, { Fragment } from "react";
import classes from "./Header.module.css";
import logo from './shopify-logo.png';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.header_title}>{props.header}</h1>
        <p className={classes.message}>
          Movie awards for entrepreneurs - nominate your 5 favourite movies
        </p>
      </header>
    </Fragment>
  );
};

export default Header;
