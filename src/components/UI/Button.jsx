import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, type, onClick, id }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={classes.button}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
