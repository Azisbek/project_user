import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({ title, message, onConfirm, onConfirmCancel, className }) => {
  const BackDrop = (props) => {
    return <div onClick={props.onConfirm} className={classes.backdrop}></div>;
  };

  const ModalOverLay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={classes.content}>
          <p> {props.message}</p>
        </main>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Ok</Button>
          <Button onClick={onConfirmCancel}>cancel</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {createPortal(
        <BackDrop onConfirm={onConfirm} className={className} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverLay
          className={className}
          message={message}
          title={title}
          onConfirm={onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
