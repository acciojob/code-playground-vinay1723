import React from "react";

function Login({ setAuthorization, isAuthorised }) {
  const handleClick = () => {
    setAuthorization(!isAuthorised);
  };

  return (
    <div>
      <p>{isAuthorised ? "Log Out" : "Log In"}</p>
      <button data-testid="auth-btn" onClick={handleClick}>
        {isAuthorised ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default Login;
