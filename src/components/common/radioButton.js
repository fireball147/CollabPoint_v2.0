import React from "react";

function RadioButton(props) {
  return (
    <div className={props.className}>
      <input type="radio" name={props.name} value={props.value} />
      <label>{props.label}</label>
    </div>
  );
}

export default RadioButton;
