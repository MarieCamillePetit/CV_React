import React, { useState, setData } from "react";
import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const ProjectsDb = () => {
  // const [dataToShow, setData] = useState([]);
  // const firebaseConfig = {
  //   apiKey: "AIzaSyB3RCVRxXT29EnhZDdIZOyHXFxCmDL7Hpc",
  //   authDomain: "mcp-projet-2023.firebaseapp.com",
  //   projectId: "mcp-projet-2023",
  //   storageBucket: "mcp-projet-2023.appspot.com",
  //   messagingSenderId: "505248643448",
  //   appId: "1:505248643448:web:22b8e4c398baaca07b708d",
  //   measurementId: "G-2PC202TRHC",
  // };
  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // // Initialize Cloud Firestore and get a reference to the service
  // const db = getFirestore(app);
  // const projetsCollection = collection(db, "projets");
  // return (
  //   <>
  //     <button onClick={() => addProjects(projetsCollection)}>Add</button>
  //     <button onClick={() => getProjects(projetsCollection)}>Get</button>
  //     <p>
  //       {dataToShow.map(
  //         (data) => "Name : " + data.nom + " Valeur : " + data.github + ""
  //       )}
  //     </p>
  //   </>
  // );
};

// async function addProjects(projetsCollection) {
//   try {
//     const docRef = addDoc(projetsCollection, {
//       github: "OUISTITITITITITI",
//       infos: "test",
//       name: "nom",
//       picture: "photo",
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// async function getProjects(projetsCollection) {
//   const data = [];
//   const querySnapshot = await getDocs(projetsCollection);
//   //display the data
//   querySnapshot.forEach((doc) => {
//     data.push({ nom: doc.data().nom, github: doc.data().github });
//     // if (doc.exists()) {
//     //   // console.log(doc.id, " => ", doc.data());
//     //   // console.log(doc.data().name);
//     //   //return the data in html
//     //   return doc.data().name;
//     // } else {
//     //   // doc.data() will be undefined in this case
//     //   console.log("No such document!");
//     // }
//   });
//   setData(data);
// }

export default ProjectsDb;
