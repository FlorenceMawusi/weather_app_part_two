import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import users from "./Users";

export default function Signup({ onSuccess = () => {} }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function checkSignup() {
    const userExists = users[userName];
    if (userExists) {
      alert("Username already exists");
    }

    users[userName] = password;
    alert("Sign In Successful");
    onSuccess();
  }

  return (
    <>
      <Modal.Dialog>
        <Modal.Body>
          <Modal.Title>Sign Up</Modal.Title>
          <form>
            <input
              type="text"
              placeholder="Username"
              style={{ padding: "5px" }}
              value={userName}
              onChange={(event) => {
                setUsername(event.target.value);
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
            />
            <br />
            <br />
            <input onClick={checkSignup} type="button" value="Sign Up" />
          </form>
          e
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
}
