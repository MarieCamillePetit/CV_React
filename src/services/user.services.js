import { collection, getDocs, getDoc, addDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3RCVRxXT29EnhZDdIZOyHXFxCmDL7Hpc",
  authDomain: "mcp-projet-2023.firebaseapp.com",
  projectId: "mcp-projet-2023",
  storageBucket: "mcp-projet-2023.appspot.com",
  messagingSenderId: "505248643448",
  appId: "1:505248643448:web:22b8e4c398baaca07b708d",
  measurementId: "G-2PC202TRHC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const projetsCollectionRef = collection(db, "users");

class UsersDataService {
  getAllUsers = async () => {
    return await getDocs(projetsCollectionRef);
  };

  addUsers = async (user) => {
    return await addDoc(projetsCollectionRef, user);
  };

  getUser = async (id) => {
    const docRef = doc(db, "users", id);
    return await getDoc(docRef);
  };
}

export default new UsersDataService();
