import React from "react";
import UserList from "./components/UserList";
import { ToastContainer } from "react-toastify";
import "./assets/style.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app-container">
      <UserList />
      <ToastContainer />
    </div>
  );
};

export default App;
