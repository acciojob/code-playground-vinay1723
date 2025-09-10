import React from "react";
import { Route, Redirect } from "react-router-dom";
import PlayGround from "./PlayGround";

const PrivateRoute = ({ isAuthorised, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorised ? <PlayGround {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
