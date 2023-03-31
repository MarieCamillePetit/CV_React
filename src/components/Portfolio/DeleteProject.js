import React, { useState, useEffect } from "react";
import ProjetsDataService from "../../services/projets.services";

const DeleteProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    const data = await ProjetsDataService.getAllProject();
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <div className="deleteProject">
        <div className="portfolioContent">
          <div className="projects">
            {projects.map((doc) => (
              <div key={doc.id} className="project">
                <img src="./media/twittosphere.PNG" alt=""></img>
                <span className="infos">
                  <h2>{doc.nom}</h2>
                  <p>{doc.Technologies}</p>
                  <p>{doc.infos}</p>
                </span>
                <div className="btn_link">
                  <a href={doc.github}>Github</a>
                  <a onClick={() => ProjetsDataService.deleteProject(doc.id)}>
                    DELETE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteProject;
