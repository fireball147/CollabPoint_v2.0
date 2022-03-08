import React from "react";
import RadioButton from "../common/radioButton";

function Recurrence(props) {
  return (
    <div className="container content-page">
      <p className="form-group">Recurrence Options</p>
      <div className="form-group"> Set Repeat Frequency</div>
      <div className="table-row">
        <RadioButton
          className="radio-btn"
          name="recurrence-frequency"
          value="1"
          label="Never"
        />
        <RadioButton
          className="radio-btn"
          name="recurrence-frequency"
          value="2"
          label="Weekly"
        />
        <RadioButton
          className="radio-btn"
          name="recurrence-frequency"
          value="3"
          label="Bi-weekly (using date)"
        />
        <RadioButton
          className="radio-btn"
          name="recurrence-frequency"
          value="4"
          label="Bi-weekly (using day)"
        />
        <RadioButton
          className="radio-btn"
          name="recurrence-frequency"
          value="5"
          label="Monthly (using date)"
        />
        <RadioButton
          className="radio-btn"
          name="recurrence-frequency"
          value="6"
          label="Monthly (using day)"
        />
        <RadioButton
          className="radio-btn"
          name="recurrence-frequency"
          value="7"
          label="Never"
        />
      </div>
      <div className="form-group"> Set Creation Date/Day</div>
    </div>
  );
}

export default Recurrence;
