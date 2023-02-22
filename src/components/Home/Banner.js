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
          {/* <NavLink to="/contact">Resumé</NavLink> */}
          <a>GitHub</a>
          <a>Linkedin</a>
        </div>
        <div class="right-side">
          <img src="./logo192.png" className="img_banner" alt="img"></img>
        </div>
        <div class="hero-scroll"></div>
      </div>
    </>
  );
};

export default Banner;
