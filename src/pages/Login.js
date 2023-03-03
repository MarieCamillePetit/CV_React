import React from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import Navigation from "../components/Navigation";

const Login = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB3RCVRxXT29EnhZDdIZOyHXFxCmDL7Hpc",
    authDomain: "mcp-projet-2023.firebaseapp.com",
    projectId: "mcp-projet-2023",
    storageBucket: "mcp-projet-2023.appspot.com",
    messagingSenderId: "505248643448",
    appId: "1:505248643448:web:22b8e4c398baaca07b708d",
    measurementId: "G-2PC202TRHC",
  };

  firebase.initializeApp(firebaseConfig);
  var uiConfig = {
    signInSuccessUrl: "<url-to-redirect-to-on-success>",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: "<your-tos-url>",
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign("<your-privacy-policy-url>");
    },
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start("#firebaseui-auth-container", uiConfig);

  return (
    <>
      <Navigation />
      <div id="firebaseui-auth-container"></div>
    </>
  );
};

export default Login;
