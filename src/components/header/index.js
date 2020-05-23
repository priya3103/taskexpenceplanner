import React from "react";
const Header = props => {
  const formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "ckz"
  });
  return (
    <div className={"headercontainer"}>
      <div className={"headertxtbal"}>Balance</div>
      <div className={"headertxtbalamt"}>
        {formatter.format(props.totalexpense)} CZK
      </div>
      <div className={"headertxtexpense"}>
        <div className={"headertxtexpenseincome"}>
          Income {formatter.format(props.income)} kc{" "}
        </div>
        <div className={"headertxtexpensespending"}>
          Spending {formatter.format(props.spending)} kc
        </div>
      </div>
    </div>
  );
};
export default Header;
