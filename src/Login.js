import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import users from "./Users";

export default function Login({ onSuccess = () => {} }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function checkLogin() {
    const userExists = users[userName];
    if (!userExists) {
      alert("Invalid username");
      return;
    }

    if (userExists !== password) {
      alert("Invalid password");
      return;
    }

    alert("Login Successful");
    onSuccess();
  }

  return (
    <>
      <Modal.Dialog>
        <Modal.Body>
          <Modal.Title>Login</Modal.Title>
          <form>
            <input
              type="text"
              placeholder="Username"
              style={{ padding: "5px" }}
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              style={{ padding: "5px" }}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
            <br />
            <br />
            <input onClick={checkLogin} type="button" value="Login"></input>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
}
