import React from "react";
import Navigation from "../components/Navigation";

const Portfolio = () => {
  return (
    <div>
      <Navigation />
      <div className="card_project">
        <h2 className="h2_projets">Mes projets</h2>
        <div className="card_project_container">
          <div className="card">
            <img src="./twittosphère.png" alt="" className="card__img"></img>
            <h4 className="card__title">Twittosphère</h4>
            <p className="card__description">
              Projet en PHP avec le framework Symfony, réalisé lors de ma LP
              DIM.
            </p>
            <a href="#" className="card__btn">
              GitHub du projet
            </a>
          </div>

          <div className="card">
            <img src="./j2e.png" alt="" className="card__img"></img>
            <h4 class="card__title">Ulco'thèque</h4>
            <p class="card__description">
              Projet en J2E, réalisé lors de ma LP DIM, avec la création de
              différentes requêtes.
            </p>
            <a href="#" className="card__btn">
              GitHub du projet
            </a>
          </div>

          <div className="card">
            <img src="./ulcopokemon.png" alt="" class="card__img"></img>
            <h4 className="card__title">Ulco'Kémon</h4>
            <p className="card__description">
              Projet en J2E, réalisé lors de ma LP DIM, avec la création de
              différentes requêtes.
            </p>
            <a href="#" className="card__btn">
              GitHub du projet
            </a>
          </div>
        </div>
        <div className="card_project_container">
          <div className="card">
            <img src="./twittosphère.png" alt="" className="card__img"></img>
            <h4 className="card__title">Twittosphère</h4>
            <p className="card__description">
              Projet en PHP avec le framework Symfony, réalisé lors de ma LP
              DIM.
            </p>
            <a href="#" className="card__btn">
              GitHub du projet
            </a>
          </div>

          <div className="card">
            <img src="./j2e.png" alt="" className="card__img"></img>
            <h4 class="card__title">Ulco'thèque</h4>
            <p class="card__description">
              Projet en J2E, réalisé lors de ma LP DIM, avec la création de
              différentes requêtes.
            </p>
            <a href="#" className="card__btn">
              GitHub du projet
            </a>
          </div>

          <div className="card">
            <img src="./ulcopokemon.png" alt="" class="card__img"></img>
            <h4 className="card__title">Ulco'Kémon</h4>
            <p className="card__description">
              Projet en J2E, réalisé lors de ma LP DIM, avec la création de
              différentes requêtes.
            </p>
            <a href="#" className="card__btn">
              GitHub du projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
