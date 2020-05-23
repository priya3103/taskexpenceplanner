import React from "react";
import "./App.css";
import { CustomButton, CustomDatePicker, CustomInput } from "./components";
import { reduxForm } from "redux-form";

class expensePopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="row">
        <div className="addTitle">{this.props.expenseType}</div>
        <form className="formstyle" onSubmit={handleSubmit}>
          <CustomInput
            label={"Title"}
            placeholder={"Add details"}
            name={"title"}
            required={true}
          />
          <CustomInput
            label={"Amount"}
            placeholder={"Enter the amount"}
            name={"amount"}
            type={"number"}
            required={true}
          />
          <CustomDatePicker label={"Date"} name={"date"} required={true} />

          <div className="flex dir" style={{ marginTop: 30 }}>
            <CustomButton
              type={"submit"}
              className={"addformbtn"}
              onChange={() => null}
              disabled={pristine || submitting}
              name={"Submit"}
            />
            <CustomButton
              type={"button"}
              className={"addformbtn"}
              onChange={reset}
              disabled={false}
              name={"Clear Values"}
            />
            <CustomButton
              type={"button"}
              className={"addformbtn"}
              onChange={() => this.props.close()}
              disabled={false}
              name={"Cancel"}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: "expenseform"
})(expensePopup);
