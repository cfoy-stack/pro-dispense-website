import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Pro-Dispense | A New Standard in Performance Nutrition</title>
        <meta name="description" content="Precision dispensing and personalised performance nutrition solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>

      <main>

        <section id="hero" className="hero">
          <div className="hero-content">
            <h1>A New Standard <br />in Performance Nutrition</h1>
            <p>Precision. Personalisation. Performance.</p>
            <a href="#enquire" className="btn primary-btn">Enquire Now</a>
          </div>
        </section>

        <section id="why" className="section why-section">
          <div className="container">
            <h2>Why We’re Doing This</h2>
            <p>
              Preparing supplements manually takes time and creates inconsistencies. Ready-to-drink options often contain unnecessary additives and lack personalisation.  
              Pro-Dispense transforms supplementation from a manual process into a connected, measurable system — saving time, improving accuracy, and driving better results.
            </p>
          </div>
        </section>

        <section id="founders" className="section founders">
          <div className="container">
            <h2>Our Team</h2>
            <div className="founders-grid">
              <article>
                <h3>Cameron Foy</h3>
                <p>Co-Founder / Director</p>
                <p>Former professional footballer with a background in psychology & sport science and strong football industry links.</p>
              </article>
              <article>
                <h3>Andrew Davison</h3>
                <p>Co-Founder / Head of Design</p>
                <p>Master’s degree in Product Design & Engineering; experienced in premium product development.</p>
              </article>
              <article>
                <h3>Jamie Sach</h3>
                <p>Industrial Designer</p>
                <p>Award-winning designer with two decades of experience in multidisciplinary creative industries.</p>
              </article>
              <article>
                <h3>Chris Wilson</h3>
                <p>Creative Director / Marketing</p>
                <p>Brand and marketing expert focused on premium positioning and communication.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="system" className="section system">
          <div className="container">
            <h2>The Pro-Dispense System</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Smart Dispenser Technology</h3>
                <p>Patent-pending, precise fluid dispensing with seamless automation.</p>
              </div>
              <div className="feature">
                <h3>Custom Formulated Drinks</h3>
                <p>Nutrition tailored to individual athlete needs and goals.</p>
              </div>
              <div className="feature">
                <h3>Real-Time Tracking & Data</h3>
                <p>Monitor consumption and compliance with actionable insights.</p>
              </div>
              <div className="feature">
                <h3>Integrated Software Ecosystem</h3>
                <p>Connected platform for effortless management and analysis.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="section benefits">
          <div className="container">
            <h2>The Difference We Make</h2>
            <ul className="benefits-list">
              <li>Save 70% of time spent manually preparing supplements daily</li>
              <li>Improve athlete compliance and nutritional quality</li>
              <li>Sustainable, science-led approach benefiting players and clubs</li>
            </ul>
          </div>
        </section>

        <section id="enquire" className="section enquire">
          <div className="container">
            <h2>Get In Touch</h2>
            {submitted ? (
              <p className="thankyou-message">Thank you for your enquiry! We will be in touch soon.</p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" required value={form.name} onChange={handleInput} />

                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required value={form.email} onChange={handleInput} />

                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" value={form.company} onChange={handleInput} />

                <label htmlFor="message">Message*</label>
                <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleInput}></textarea>

                <button type="submit" className="btn primary-btn">Submit</button>
              </form>
            )}
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>© 2024 Pro-Dispense</p>
          </div>
        </footer>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          background: #F7F7F7;
          color: #293C4A;
          scroll-behavior: smooth;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        h1, h2, h3 {
          font-family: 'Montserrat', sans-serif;
          color: #1C262D;
          margin-bottom: 0.5em;
        }
        p, ul {
          max-width: 700px;
          line-height: 1.6;
        }
        ul {
          padding-left: 1.2em;
          list-style-type: disc;
          text-align: left;
          margin: 1em auto 0;
          color: #293C4A;
          font-size: 1.1rem;
        }
        .btn {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          padding: 0.85em 2.25em;
          border-radius: 4px;
          cursor: pointer;
          border: 2px solid transparent;
          user-select: none;
          display: inline-block;
          transition: background-color 0.3s ease, color 0.3s ease;
          color: #fff;
          background-color: #293C4A;
          text-align: center;
        }
        .btn:hover {
          background-color: #1C262D;
          border-color: #1C262D;
        }
        section {
          padding: 5em 1em;
          text-align: center;
        }
        .container {
          max-width: 960px;
          margin: 0 auto;
        }
        .hero {
          background: linear-gradient(180deg, #293C4A 0%, #1C262D 100%);
          height: 100vh;
          color: #F7F7F7;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1em;
        }
        .hero-content h1 {
          font-size: 3.8rem;
          font-weight: 700;
          margin-bottom: 0.5em;
          line-height: 1.1;
        }
        .hero-content p {
          font-size: 1.3rem;
          margin-bottom: 1.5em;
          opacity: 0.9;
        }
        .founders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2em;
          margin-top: 2em;
        }
        .founders-grid article h3 {
          margin-bottom: 0.3em;
          font-size: 1.3rem;
        }
        .founders-grid article p {
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .features-grid {
          display: grid;
          gap: 2.5em;
          grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
          margin-top: 2em;
          color: #1C262D;
        }
        .feature h3 {
          margin-bottom: 0.5em;
          color: #293C4A;
        }
        .feature p {
          font-size: 1rem;
          line-height: 1.5;
        }
        .enquire form {
          max-width: 480px;
          margin: 1.5em auto 0;
          text-align: left;
        }
        .contact-form label {
          display: block;
          margin-top: 1.1em;
          font-weight: 600;
          color: #293C4A;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          margin-top: 0.3em;
          padding: 0.7em;
          font-size: 1rem;
          border-radius: 4px;
          border: 1px solid #ccc;
          resize: vertical;
          transition: border-color 0.3s ease;
          color: #293C4A;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #293C4A;
          background-color: #f7f7f7;
        }
        .thankyou-message {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a7a1a;
          margin-top: 1em;
          text-align: center;
        }
        .footer {
          background-color: #1C262D;
          color: #b0c4d1;
          padding: 1em 0;
          text-align: center;
          font-size: 0.9rem;
        }
        @media (max-width: 720px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .hero-content p {
            font-size: 1.1rem;
          }
          section {
            padding: 3em 1em;
          }
        }
      `}</style>
    </>
  );
}
