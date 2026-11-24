import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <section id="about">
      <div className="items-container">
        <div className="minimal-about">
          <h1>About Me</h1>
          <p className="about-lead">
            I'm a Bachelor of Computer Application undergraduate at Techno India Hooghly Campus with a strong focus on Data Analytics, SQL, and Python-driven data engineering.
          </p>
          <p className="about-body">
            I turn raw, messy datasets into clear, actionable insights—whether through automated web scraping, API data pipelines, exploratory data analysis, or interactive business intelligence dashboards in Power BI and Tableau.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;