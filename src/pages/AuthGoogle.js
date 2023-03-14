// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AddProject from "../components/Portfolio/AddProject";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyB3RCVRxXT29EnhZDdIZOyHXFxCmDL7Hpc",
  authDomain: "mcp-projet-2023.firebaseapp.com",
  projectId: "mcp-projet-2023",
  storageBucket: "mcp-projet-2023.appspot.com",
  messagingSenderId: "505248643448",
  appId: "1:505248643448:web:22b8e4c398baaca07b708d",
  measurementId: "G-2PC202TRHC",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div className="AuthGoogleContainer">
        <p>Connecter vous :</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }

  // Modif adress mail
  if (
    isSignedIn &&
    firebase.auth().currentUser.email === "mariecamille..petitlpdim@gmail.com"
  ) {
    return (
      <div className="AuthGoogleContainer">
        <div className="Profile">
          {firebase.auth().currentUser.photoURL ? (
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          ) : null}
          <h2>Bienvenue {firebase.auth().currentUser.displayName}!</h2>
        </div>

        <p>
          Vous êtes connecté avec l'adresse mail :{" "}
          {firebase.auth().currentUser.email}
        </p>
        <div className="btn_link">
          <a href="https://firebasestorage.googleapis.com/v0/b/mcp-projet-2023.appspot.com/o/CV.pdf?alt=media&token=9d6613d8-6940-4eb6-a8d8-d1f353f53e41">
            Resume
          </a>
          <a href="https://firebasestorage.googleapis.com/v0/b/mcp-projet-2023.appspot.com/o/mcreact2023.rar?alt=media&token=0af62d5e-77d7-4afc-910a-6fce17980525">
            Code source du site
          </a>
        </div>
        <div className="btn_link_logout">
          <a onClick={() => firebase.auth().signOut()}>Se déconnecter</a>
        </div>
        <AddProject />
      </div>
    );
  }
  return (
    <div className="AuthGoogleContainer">
      <div className="Profile">
        {firebase.auth().currentUser.photoURL ? (
          <img
            alt="profile picture"
            src={firebase.auth().currentUser.photoURL}
          />
        ) : null}
        <h2>Bienvenue {firebase.auth().currentUser.displayName}!</h2>
      </div>

      <p>
        Vous êtes connecté avec l'adresse mail :{" "}
        {firebase.auth().currentUser.email}
      </p>
      <div className="btn_link">
        <a href="https://firebasestorage.googleapis.com/v0/b/mcp-projet-2023.appspot.com/o/CV.pdf?alt=media&token=9d6613d8-6940-4eb6-a8d8-d1f353f53e41">
          Resume
        </a>
        <a href="https://firebasestorage.googleapis.com/v0/b/mcp-projet-2023.appspot.com/o/mcreact2023.rar?alt=media&token=0af62d5e-77d7-4afc-910a-6fce17980525">
          Code source du site
        </a>
      </div>
      <div className="btn_link_logout">
        <a onClick={() => firebase.auth().signOut()}>Se déconnecter</a>
      </div>
      <AddProject />
    </div>
  );
}

export default SignInScreen;
