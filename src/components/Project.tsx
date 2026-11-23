import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projectList: ProjectItem[] = [
  {
    title: "Amazon Web Scraper Project",
    description:
      "Automated web scraping pipeline built in Python using BeautifulSoup and requests to extract product pricing, ratings, and availability data into structured CSV datasets for price tracking.",
    image: mock01,
    link: "https://github.com/your-username/amazon-web-scraper"
  },
  {
    title: "Automate API Extraction + Appending Data + Extra -- Project",
    description:
      "Scheduled Python ETL workflow that pulls live cryptocurrency/market metrics from a REST API, cleans and normalizes JSON payloads with pandas, and appends historical records automatically.",
    image: mock02,
    link: "https://github.com/your-username/automate-api-extraction"
  },
  {
    title: "Global YouTube Statistics",
    description:
      "Exploratory data analysis and interactive visualization of global YouTube channel performance, subscriber growth, earnings, and category trends using Python, SQL, and BI dashboards.",
    image: mock03,
    link: "https://github.com/your-username/global-youtube-statistics"
  },
  {
    title: "Mall Customer Segmentation",
    description:
      "Unsupervised machine learning clustering model using K-Means in Python (scikit-learn, pandas) to segment retail shoppers by annual income and spending score for targeted marketing.",
    image: mock04,
    link: "https://github.com/your-username/mall-customer-segmentation"
  }
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} className="zoom" alt={project.title} width="100%" />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;