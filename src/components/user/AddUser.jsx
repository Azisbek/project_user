import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddUser = ({ onAddUser }) => {
  const [error, setError] = useState(null);
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      inputNameRef.current.value.trim().length === 0 ||
      inputAgeRef.current.value.length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: " User Should not be empty. Type somthing ",
      });
      return;
    }

    if (inputAgeRef.current.value < 1) {
      setError({
        title: "Age is not valid",
        message: " Must not be under 1 age ",
      });
      return;
    }
    const data = {
      name: inputNameRef.current.value,
      age: inputAgeRef.current.value,
      id: Math.random().toString(),
    };

    onAddUser(data);
  };

  const closeModalHandler = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={closeModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input ref={inputNameRef} id="name" type="text" />
          <label htmlFor="age">Age</label>
          <input ref={inputAgeRef} id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
