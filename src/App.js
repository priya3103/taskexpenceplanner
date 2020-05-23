import React from "react";
import "./App.css";
import moment from "moment";
import Modal from "react-modal";
import ExpensePopup from "./expensePopup";
import { CustomButton, Header, ExpenseData } from "./components";
import { connect } from "react-redux";

class Expense extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseModal: false,
      expenseType: ""
    };
  }

  submit(data) {
    data.id = this.props.expense.expenselist.length + 100;
    data.type = this.state.expenseType.replace("Add", "").trim();
    data.date = moment(data.date).format("D.M.YYYY");
    if (this.state.expenseType == "Add Income") this.props.addIncome(data);
    else if (this.state.expenseType == "Add Spending")
      this.props.addSpending(data);
    this.closeModal();
  }
  modalIsOpen(title) {
    this.setState({ expenseModal: true, expenseType: title });
  }
  closeModal() {
    this.setState({ expenseModal: false });
  }
  afteropen() {
    window.scrollTo(0, 0);
  }
  remove(data) {
    if (data && data != null) {
      if (data.type == "Income") this.props.removeIncome(data);
      else if (data.type == "Spending") this.props.removeSpending(data);
    }
  }
  render() {
    const msg = "No expense recorded";
    return (
      <div className="wrapper">
        <Header {...this.props.expense} />
        <div className="exwrapper">
          {this.props.expense.expenselist.length > 0 ? (
            this.props.expense.expenselist.map((item, index) => {
              return (
                <ExpenseData
                  key={index}
                  {...item}
                  remove={e => this.remove(e)}
                />
              );
            })
          ) : (
            <div className="flexcenter">{msg}</div>
          )}
        </div>
        <div className="btnpos">
          <div className="btncontainer">
            <CustomButton
              type={"button"}
              className={"addpagebtn greencolor"}
              onChange={() => this.modalIsOpen("Add Income")}
              disabled={false}
              name={"Add Income"}
            />
            <CustomButton
              type={"button"}
              className={"addpagebtn redcolor"}
              onChange={() => this.modalIsOpen("Add Spending")}
              disabled={false}
              name={"Add Spending"}
            />
          </div>
        </div>
        <Modal
          isOpen={this.state.expenseModal}
          onRequestClose={() => this.closeModal()}
          onAfterOpen={() => this.afteropen()}
          style={customStyles}
          contentLabel="Expense Modal"
        >
          <ExpensePopup
            onSubmit={data => this.submit(data)}
            expenseType={this.state.expenseType}
            close={() => this.closeModal()}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expense: state.expense
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addIncome: data =>
      dispatch({
        type: "ADD_INCOME",
        payload: data
      }),
    addSpending: data =>
      dispatch({
        type: "ADD_SPENDING",
        payload: data
      }),
    removeIncome: data =>
      dispatch({
        type: "REMOVE_INCOME",
        payload: data
      }),
    removeSpending: data =>
      dispatch({
        type: "REMOVE_SPENDING",
        payload: data
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(74, 81, 93, 0.71)",
    overflowY: "auto",
    overflowX: "hidden"
  },
  content: {
    position: "none",
    top: "-22px",
    left: "0px",
    margin: "60px auto",
    maxWidth: "530px",
    width: "90%",
    height: "auto",
    border: "none",
    background: "#fff",
    overflow: "hidden",
    WebkitOverflowScrolling: "touch",
    borderRadius: "6px",
    outline: "none",
    padding: "25px",
    boxShadow: "0px 0px 12px 3px #5F5F5F"
  }
};
