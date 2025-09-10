import React from "react";

function Login({ setAuthorization, isAuthorised }) {
  const handleClick = () => {
    setAuthorization(!isAuthorised); // ✅ directly toggle
  };

  return (
    <div>
      <p>{isAuthorised ? "Log Out" : "Log In"}</p>
      <button onClick={handleClick}>
        {isAuthorised ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default Login;
