import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import WeatherFetch from "./weatherFetch.js";
import WeatherHistory from "./WeatherHistory.js";


function App() {
  const [showScreen, setshowScreen] = useState('main');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // loggin in
  //when user comes to the page, login button is shown. Welcome is shown. 
  //click the login button, show the modal. 
  //user types input, form is controlled.
  // collect data when form is clicked 
  //verify if the data is in the json file
  //display logout
  //display user history 
  
  //change all of the ustates to one 
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

        {
          isLoggedIn
          ?
          <div onClick={() => {setshowScreen('main'); setIsLoggedIn(false)}} style={{ width: "100%", textAlign: 'right', marginRight: '0',cursor: 'pointer' }}>
          Logout
          </div>
          :
          <>
            <div onClick={() => setshowScreen('login')} style={{ width: "100%", textAlign: 'right', marginRight: '0',cursor: 'pointer' }}>
            Login
            </div>
            <div onClick={() => setshowScreen('signup')} style={{minWidth: '100px', textAlign: 'right', cursor: 'pointer' }}>
            Sign Up
            </div> 
          </>
        }

      </div>

      <div
        style={{
          background: `url(./mainpic.jpg)`,
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        
        <center>
          <h1>Welcome!</h1>
          {showScreen === 'login' && <Login 
             onSuccess={() => {setshowScreen('main'); setIsLoggedIn(true); }} 
          />}
          {showScreen ==='signup' && <Signup 
          onSuccess = {() => {setshowScreen('main'); setIsLoggedIn(true);}}
          />}
         {showScreen === 'main' && <WeatherFetch />}

        </center>
      </div>

      {isLoggedIn === true && <WeatherHistory />}
    </>
  );
}

export default App;
