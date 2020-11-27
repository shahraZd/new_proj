import React, { useState, useEffect } from "react";
import UserContext from "./context/userContext";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import Layout from "./Layout";
import axios from "axios";
//PAGES
import HomePage from "./containers/HomePage";
import Signup from "./containers/SignUp";
import SignupPro from "./containers/SignUp/SignUpPro";
import Signin from "./containers/SignIn";
import Videochat from "./containers/Videochat";
import Videonotready from "./containers/VideoNotReady";
import Phonenotready from "./containers/PhoneCall";
import Textchat from "./containers/Text-chat";
import Payement from "./containers/Payement";
import Dashboard from "./containers/Dashboard";
import DashboardPro from "./containers/Dashboard/dashboardPro";
import WrittenAdvice from "./containers/Written-advice";
import UpdateProfile from "./containers/UpdateProfile";
import UpdateProfilePro from "./containers/UpdateProfile/UpdateProfilePro";
import PhoneCall from "./containers/PhoneCall";
import PhoneExpired from "./containers/Phoneexpired";
import Book from "./containers/Book";
//ERROR PAGES
import UnAuthorized from "./containers/ErrorResult/unAuthorized"
import ServerError from "./containers/ErrorResult/serverError"
import NotFound from "./containers/ErrorResult/notFound"
//PRIVATE ROUTE
import PrivateRoutes from "./privateRoutes/PrivateRoutes"
import PrivateUser from "./privateRoutes/PrivateUser"

export default function App() {
  const [isPro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
    setIsLoading(false)

  }, []);
  return (
    <div dir="rtl">
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          {isLoading ? (
            <Spin tip="جاري..." spinning={isLoading} />
          ) : (
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage isPro={isPro} />
                </Route>
                <Route exact path="/sign-up">
                  <Signup isPro={isPro} />
                </Route>
                <Route exact path="/sign-up-pro">
                  <SignupPro isPro={isPro} />
                </Route>
                <Route exact path="/sign-in">
                  <Signin />
                </Route>
                {/* <Route exact path="/dashboard">
                  <Dashboard />
                </Route> */}
                <PrivateRoutes path="/dashboard" component={Dashboard}/>


                <Route exact path="/dashboardPro">
                  <DashboardPro isPro={isPro} />
                </Route>
                <Route exact path="/written-advice">
                  <WrittenAdvice />
                </Route>
                <Route exact path="/profile">
                  <UpdateProfile isPro={isPro} />
                </Route>
                <Route exact path="/profilePro">
                  <UpdateProfilePro isPro={isPro} />
                </Route>
                <Route exact path="/text-chat" component={Textchat} />
                <Route exact path="/book" component={Book} />
                <Route exact path="/checkout" component={Payement} />
                <Route exact path="/video-chat" component={Videochat} />
                <Route
                  exact
                  path="/video-not-ready"
                  component={Videonotready}
                />
                  <Route
                  exact
                  path="/phoneexpired"
                  component={PhoneExpired}
                />
                <Route
                  exact
                  path="/phone-not-ready"
                  component={Phonenotready}
                />
                <Route exact path="/phone-call" component={PhoneCall} />
                <Route exact path="/unAuthorized" component={UnAuthorized} />
                <Route exact path="/server-error" component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          )}
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
