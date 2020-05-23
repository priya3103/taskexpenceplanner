import React from 'react'
const CustomBotton = props =>{
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={() => props.onChange()}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
}
export default CustomBotton;