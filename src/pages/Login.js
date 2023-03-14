import React from "react";
import "firebaseui/dist/firebaseui.css";
import Navigation from "../components/Navigation";
import AuthGoogle from "./AuthGoogle";

const Login = () => {
  return (
    <>
      <Navigation />
      <div>
        <AuthGoogle />
      </div>
    </>
  );
};

export default Login;
