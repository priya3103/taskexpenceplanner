import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ExpenseData = props => {
  const formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "ckz"
  });
  return (
    <div className="expenselistcontainer">
      <div className="exwrap">
        <div className="exdate">{props.date}</div>
        <div
          className={
            props.type == "Income" ? "examt greentxtcolor" : "examt redtxtcolor"
          }
        >
          {formatter.format(props.amount)} Kc
        </div>
      </div>
      <div className="extitle">{props.title}</div>
      <div className="exicon" onClick={() => props.remove(props)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};
export default ExpenseData;
