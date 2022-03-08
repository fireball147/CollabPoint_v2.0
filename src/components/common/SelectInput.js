import React from "react";

function SelectInput(props) {
  let wrapperClass = "form-group col-md-6 col-xs-12";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error;";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}> {props.label} </label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onSelectChange}
          className="form-control"
          value={props.value}
        >
          <option>Select Item</option>
          {props.optionsArray.map((data) => {
            return (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

export default SelectInput;
