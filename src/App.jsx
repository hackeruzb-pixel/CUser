import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/userList";
import NewUserForm from "./components/newuser/NewUserForm";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([]);
  
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const closeModal =(e) => {
     if (e.target.classList.value === 'overlay') setShowModal(false)
     if (e.key === "Escape") setShowModal(false)
  }
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
  {showModal && <NewUserForm adduser={addUser}  />}
      <button onClick={()=> setShowModal(true)} className="create-user">Create User</button>
      <Footer />
    </div>
  );
}

export default App;
