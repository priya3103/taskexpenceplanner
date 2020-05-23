import React from "react";
import { Field } from "redux-form";
const CustomInput = props => {
  return (
    <div>
      <label>{props.label}</label>
      <div>
        <Field
          name={props.name}
          component="input"
          type="text"
          placeholder={props.placeholder}
          required={props.required}
          type={props.type}
        />
      </div>
    </div>
  );
};
export default CustomInput;
