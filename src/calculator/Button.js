  
import React from "react";
import "./button.css";

const Operator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

const Button = props => (
  <div
    className={`button ${
      Operator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button