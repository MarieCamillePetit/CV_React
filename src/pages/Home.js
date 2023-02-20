import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div class="hero-box">
        <div class="left-side">
          <h2>Front-End Developer</h2>
          <h4>Front-end Guy</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad
            similique provident nesciunt, aspernatur quasi sed quae aut nobis,
          </p>
          <NavLink to="/contact">Me contacter</NavLink>
          <a>GitHub</a>
          <a>Linkedin</a>
        </div>
        <div class="right-side">
          <img src="./banner.png" className="img_banner" alt="img"></img>
        </div>
      </div>
      <div className="card_project">
        <h2 className="h2_projets">Mes derniers projets</h2>
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

        <a> Découvrer mes projets</a>
      </div>
      <h1>bjr</h1>
    </div>
  );
};

export default Home;
