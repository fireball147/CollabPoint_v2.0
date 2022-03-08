import React from "react";

function InputField(props) {
  let wrapperClass = "form-group col-md-6 col-xs-12";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error;";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}> {props.label} </label>
      <div className="field">
        <input
          id={props.id}
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          className="form-control"
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

export default InputField;
