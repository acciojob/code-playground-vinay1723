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
    <div>
      <BrowserRouter>
        <p>
          {isAuthorised
            ? "Logged in, Now you can enter Playground"
            : "You are not authenticated, Please login first"}
        </p>
        <Navigation />
        <Switch>
          {/* Private route */}
          <PrivateRoute path="/playground" isAuthorised={isAuthorised} />

          {/* Public route (Login) */}
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                setAuthorization={setIsAuthorised}
                isAuthorised={isAuthorised}
              />
            )}
          />

          {/* Fallback redirect */}
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
