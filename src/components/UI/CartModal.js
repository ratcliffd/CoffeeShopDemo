import React from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.css";


  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}/>;
  };

  const OverLay = (props) => {
    return (
      <div className={classes.modal}>
        <div >{props.children}</div>
      </div>
    );
  };
  const portEle = document.getElementById("overlay");

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portEle)}
      {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>, portEle)}
    </React.Fragment>
  );
};

export default CartModal;
