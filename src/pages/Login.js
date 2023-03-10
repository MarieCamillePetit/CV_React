import React from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import Navigation from "../components/Navigation";
import AuthGoogle, { signInWithGoogle } from "./AuthGoogle";
import Footer from "../components/Footer";

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
