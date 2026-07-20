export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I've always been driven by curiosity and a desire to understand how things work. That mindset led me to earn a degree in Mathematics, where I developed a strong foundation in analytical thinking, abstraction, and problem solving skills that naturally translated into software development and data analytics. Today, I build backend applications, analyze data, and develop automation that solves real-world problems. Whether I'm designing APIs, working with databases, or building ETL pipelines, I enjoy creating solutions that are both reliable and meaningful.
          </p>
          <p className="hero--section-description">
            I believe data provides the evidence behind good decisions, while software turns those insights into practical solutions. I'm always looking to grow as both an engineer and an analyst by exploring new technologies, contributing to challenging projects, and collaborating with others to solve complex problems. Outside of technology, I enjoy staying active, following the automotive world, and continuously challenging myself through personal projects and lifelong learning.
          </p>
        </div>
      </div>
    </section>
  );
}