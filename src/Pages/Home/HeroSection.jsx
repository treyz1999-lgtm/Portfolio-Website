export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Trey</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Engineer  </span>{" "}
            <br />
            & Data Professional
          </h1>
          <p className="hero--section-description">
            I build software that transforms data into meaningful solutions. From backend APIs and analytics dashboards to ETL pipelines and AI-powered automation, I enjoy creating reliable, scalable applications that solve real-world problems.
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
