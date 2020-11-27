import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../context/userContext";

const PrivateRoutes = ({ component: Component, roles, ...rest }) => {
  const { userData } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userData.token)
          return (
            <Redirect
              to={{ pathname: "/sign-in", state: { from: props.location } }}
            />
          );
        if(!userData.user.role==="USER")
        return (
            <Redirect
              to={{ pathname: "/unauthorized", state: { from: props.location } }}
            />
          );
      }}
    />
  );
};

export default PrivateRoutes;
