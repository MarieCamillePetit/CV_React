import React from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const Notification = () => {
  /* eslint-disable no-undef */

  // Initialize the Firebase app in the service worker by passing the generated config
  const firebaseConfig = {
    apiKey: "AIzaSyB3RCVRxXT29EnhZDdIZOyHXFxCmDL7Hpc",
    authDomain: "mcp-projet-2023.firebaseapp.com",
    projectId: "mcp-projet-2023",
    storageBucket: "mcp-projet-2023.appspot.com",
    messagingSenderId: "505248643448",
    appId: "1:505248643448:web:22b8e4c398baaca07b708d",
    measurementId: "G-2PC202TRHC",
  };

  initializeApp(firebaseConfig);
  const messaging = getMessaging();

  getToken(messaging, {
    vapidKey:
      "BMSYxhX4u1TEWnsw_Bi2wvIqv3lDinvtWSSoY2vw_CSNtktFtxAIr87wdxGVYtgiQpQDOG7NNjKjlPp4-JN5QKY",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });

  onMessage(messaging, (payload) => {
    console.log("payload", payload);
    console.log(
      "title : ",
      payload.notification.title,
      "body : ",
      payload.notification.body
    );

    document.querySelector(
      ".notification"
    ).innerHTML = `<p class="title">${payload.notification.title}</p><p class="body">${payload.notification.body}</p>`;
    document.querySelector(".notification").classList.add("active");
    setTimeout(() => {
      document.querySelector(".notification").classList.remove("active");
    }, 5000);
  });

  return <></>;
};

export default Notification;
