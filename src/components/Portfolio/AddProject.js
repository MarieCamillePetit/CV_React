import React, { useState } from "react";
import ProjetsDataService from "../../services/projets.services";

const AddProject = () => {
  const [github, setGithub] = useState("");
  const [infos, setInfos] = useState("");
  const [nom, setNom] = useState("");
  const [picture, setPicture] = useState("");
  const [Technologies, setTechnologies] = useState([]);
  const [message, setMessage] = useState({ error: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      github === "" ||
      infos === "" ||
      nom === "" ||
      picture === "" ||
      Technologies === ""
    ) {
      setMessage({ error: true, message: "Veuillez remplir tous les champs" });
      return;
    }
    const newProject = {
      github,
      infos,
      nom,
      picture,
      Technologies,
    };
    try {
      await ProjetsDataService.addProject(newProject);
      setMessage({ error: false, message: "Projet ajouté" });
    } catch (error) {
      setMessage({ error: true, message: "Une erreur est survenue" });
    }
    setGithub("");
    setInfos("");
    setNom("");
    setPicture("");
    setTechnologies([]);
  };

  return (
    <>
      <div className="addProject">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom du projet"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lien Github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lien de l'image"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
          <input
            type="text"
            placeholder="Technologies"
            value={Technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Description"
            value={infos}
            onChange={(e) => setInfos(e.target.value)}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </>
  );
};

export default AddProject;
