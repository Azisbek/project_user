import { useState } from "react";
import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";

function App() {
  const array = [];
  const [users, setUsers] = useState(array);

  const addUserHandler = (newData) => {
    setUsers((prevData) => {
      return [newData, ...prevData];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
