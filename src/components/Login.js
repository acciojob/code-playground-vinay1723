// Login.js
import React from "react";

function Login({ setAuthorization, isAuthorised }) {
  const handleClick = () => {
    setAuthorization((val) => !val);
  };

  return (
    <div>
      <p>{isAuthorised ? "logout" : "login"}</p>
      <button onClick={handleClick}>{isAuthorised ? "logout" : "login"}</button>
    </div>
  );
}

export default Login;
