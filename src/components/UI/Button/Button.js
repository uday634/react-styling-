import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      style={{ filter: !props.isValid ? 'blur(1px)':'', backgroundColor: !props.isValid ? 'red':''}}
      type={props.type}
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
