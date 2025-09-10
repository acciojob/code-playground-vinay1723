import React, { useState } from "react";
import "./../styles/App.css";
import Login from "./Login";
import PlayGround from "./PlayGround";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  return (
    <div className="main-container">
      <BrowserRouter>
        <p>
          {isAuthorised
            ? "Logged in, Now you can enter Playground"
            : "You are not authenticated, Please login first"}
        </p>
        <Navigation />
        <Switch>
          <Route path="/login">
            <Login
              setAuthorization={setIsAuthorised}
              isAuthorised={isAuthorised}
            />
          </Route>
          <Route path="/playground">
            {isAuthorised ? <PlayGround /> : <Redirect to="/login" />}
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
