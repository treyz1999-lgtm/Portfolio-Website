const email = "treyz1999@gmail.com";
const phone = "(623) 980-2567";
const phoneLink = "+16239802567";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out by email or phone. I would love to hear from you.
        </p>
      </div>
      <div className="contact--details">
        <div className="contact--detail-card">
          <p className="contact--detail-label">Email</p>
          <a href={`mailto:${email}`} className="contact--detail-link">
            {email}
          </a>
        </div>
        <div className="contact--detail-card">
          <p className="contact--detail-label">Phone</p>
          <a href={`tel:${phoneLink}`} className="contact--detail-link">
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
