import React from "react";

const Banner = () => {
  return (
    <>
      <div class="hero-box">
        <div class="left-side">
          <h4>Hi there ! 🌸</h4>
          <h2 class="title_banner">I'm Marie-Camille Petit</h2>
          <p>
            A student Web Developer ! I'm passionate with Front-end and creating
            applications on the web.
          </p>
          <div className="hero_box_link">
            <a href="https://firebasestorage.googleapis.com/v0/b/mcp-projet-2023.appspot.com/o/CV.pdf?alt=media&token=9d6613d8-6940-4eb6-a8d8-d1f353f53e41">
              Resume
            </a>
            <a href="https://github.com/MarieCamillePetit">GitHub</a>
            <a href="https://www.linkedin.com/in/mariecamillepetit/">
              Linkedin
            </a>
          </div>
        </div>
        <div class="right-side">
          <img src="./minimoi.png" className="img_banner" alt="img"></img>
        </div>
      </div>
      <div class="hero-scroll">
        <a href="#about">
          <svg
            width="201px"
            height="201px"
            viewBox="0 0 1024 1024"
            class="icon svg_banner"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ed8080"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                fill="#ed8080"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Banner;
