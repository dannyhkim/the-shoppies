import React from "react";
import classes from "./Header.module.css";
import logo from "./shopify-logo.svg";

const Header = (props) => {

  return (

      <div className={classes.header_container}>
        <img src={logo} alt="Shopify logo" />{" "}
        <span className={classes.header_banner}>The Shoppies</span>
        <header className={classes.header}>
          <h1 className={classes.header_title}>{props.header}</h1>
          <p className={classes.message}>
            <span className={classes.message_main}>
              Movie awards for entrepreneurs
            </span>{" "}
            - nominate your 5 favourite movies
          </p>
        </header>
      </div>
  );
};

export default Header;
