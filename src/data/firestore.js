import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { Component, useEffect, useState } from "react";
import db from "../../src/data/firestore";
import { initializeApp } from "firebase/app";

const ProjectsDb = () => {
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
  // const db = getFirestore(app);
  //   const [projects, setProjects] = useState([]);
  //   //how to get data from firestore
  //   const getProjects = async () => {
  //     const querySnapshot = await getDocs(collection(db, "projets"));
  //     const newProjects = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setProjects(newProjects);
  //     console.log(projects, newProjects);
  //   };
  //   useEffect(() => {
  //     getProjects();
  //   }, []);
  //   return (
  //     <>
  //       <div>
  //         {projects.map((project, i) => (
  //           <p key={i}>{project.newProjects}</p>
  //         ))}
  //       </div>
  //     </>
  //   );
};

export default ProjectsDb;
