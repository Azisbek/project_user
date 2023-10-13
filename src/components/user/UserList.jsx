import React, { useState } from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const UserList = (props) => {
  const [delShowModal, setDelShowModal] = useState(false);

  const cancelButton = () => {
    setDelShowModal((prev) => {
      return !prev;
    });
  };

  const funcDelete = (e) => {
    let currentId = e.target.id;
    setDelShowModal({
      title: "Delete user",
      message: "Are you sure you want delete this user?",
      id: currentId,
    });
  };

  function deleteItem(e) {
    const currentId = delShowModal.id;
    const filteredUsers = props.users.filter((user) => user.id !== currentId);
    props.setUsers([...filteredUsers]);
    setDelShowModal(false);
  }

  return (
    <Card className={classes.users}>
      {delShowModal && (
        <>
          <Modal
            title={delShowModal.title}
            message={delShowModal.message}
            onConfirm={deleteItem}
            onConfirmCancel={cancelButton}
          ></Modal>
        </>
      )}
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.name}>
              {user.name} ({user.age} years)
              <Button id={user.id} onClick={funcDelete}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
