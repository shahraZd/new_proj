import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../context/userContext";

const PrivateRoutes = ({ component: Component, roles, ...rest }) => {
  const { userData } = useContext(UserContext);
//   console.log("token", userData.token);
//   console.log("user", userData.user.role);
  return (
    <Route
      {...rest}
    //   render={(props) => {
        

        // if(!userData.user.role==="PRO")
        // return (
        //     <Redirect
        //       to={{ pathname: "/unauthorized", state: { from: props.location } }}
        //     />
        //   );
    //   }}
    >
        {(!userData.token)?
            <Redirect
              to="/sign-in"
            />
            :<Component/>
          }
    </Route>
  );
};

export default PrivateRoutes;
