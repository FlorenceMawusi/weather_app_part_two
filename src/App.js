import React, { useState } from "react";
import Login from "./Login";
import WeatherFetch from "./weatherFetch.js";

function App() {
  const [showLoggin, setShowLoggin] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          color: "white",
          justifyContent: 'flex-end',
          background: "black",
          padding: '10px 50px',
        }}
      >
        <div style={{minWidth: '200px',}}>Florence's Weather app</div>
        <div onClick={() => setShowLoggin(true)} style={{ width: "100%", textAlign: 'right', marginRight: '20%', }}>
          Login
        </div>
      </div>
      {/* <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#Navbar">
          Navbar
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#Login">
                Login <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div
        style={{
          background: `url(./weather.jpg)`,
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <center>
          <h1>Welcome!</h1>

          <WeatherFetch />
          <span>
            <form>
              <input type="text" placeholder = "Enter your city" id="city"></input>
              <input type="submit"  id="search" value="Search"></input>
            </form>
          </span>
          {showLoggin && <Login />}
        </center>
      </div>
    </>
  );
}

export default App;
