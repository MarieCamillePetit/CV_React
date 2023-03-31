import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyB3RCVRxXT29EnhZDdIZOyHXFxCmDL7Hpc",
  authDomain: "mcp-projet-2023.firebaseapp.com",
  projectId: "mcp-projet-2023",
  storageBucket: "mcp-projet-2023.appspot.com",
  messagingSenderId: "505248643448",
  appId: "1:505248643448:web:22b8e4c398baaca07b708d",
  measurementId: "G-2PC202TRHC",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BMSYxhX4u1TEWnsw_Bi2wvIqv3lDinvtWSSoY2vw_CSNtktFtxAIr87wdxGVYtgiQpQDOG7NNjKjlPp4-JN5QKY",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
