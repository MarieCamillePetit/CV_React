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
      {/* <div className="home">
        <h1>
          Hello, <span></span>
          {user.displayName}
        </h1>
        <button className="button signout" onClick={() => auth.signOut()}>
          Sign out
        </button>
      </div> */}
    </>
  );
};

export default Connected;
