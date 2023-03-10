import React from "react";
import { auth } from "./AuthGoogle";
import "../App.js";
import Navigation from "../components/Navigation";

const Connected = ({ user }) => {
  return (
    <>
      <Navigation />
      <div id="sign-in-status"></div>
      <div id="sign-in"></div>
      <pre id="account-details"></pre>
    </>
  );
};

export default Connected;
