import React, { useState } from "react";
import { Field } from "redux-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = props => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <label>{props.label}</label>
      <div>
        <Field
          name={props.name}
          component={datePicker}
          type="text"
          selected={date}
          onChange={e => setDate(e)}
        />
      </div>
    </div>
  );
};
export default CustomDatePicker;

const datePicker = ({
  input,
  label,
  type,
  className,
  selected,
  meta: { touched, error }
}) => (
  <div>
    <div>
      <DatePicker
        {...input}
        selected={selected}
        placeholder={label}
        type={type}
        className={className}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      {touched && error && <span className="error_field">{error}</span>}
    </div>
  </div>
);
