import React from "react";
import { useEffect, useState } from "react";
import ProjetsDataService from "../../services/projets.services";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    const data = await ProjetsDataService.getAllProject();
    console.log(data.docs);
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
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
              {/* <a
                    href="/Project"
                    variant="secondary"
                    className=""
                    onClick={(e) => getProject(doc.id)}
                  ></a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
