import React from "react";
import Chip from '@mui/material/Chip';
import BarChartIcon from '@mui/icons-material/BarChart';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "SQL",
  "Joins",
  "Aggregations",
  "CTEs",
  "Window Functions",
  "Database Querying"
];

const labelsSecond = [
  "Power BI",
  "Tableau",
  "Looker",
  "Dashboards",
  "Data Visualization",
  "Reporting"
];

const labelsThird = [
  "Python",
  "R",
  "pandas",
  "NumPy",
  "Data Wrangling",
  "Data Cleaning",
  "Automation"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <h3>
              <svg className="skill-logo database-logo" viewBox="0 0 32 32" role="img" aria-label="Database">
                <path d="M5 7.5v17C5 27 10 29.5 16 29.5S27 27 27 24.5v-17h-22z" fill="currentColor" />
                <ellipse cx="16" cy="7.5" rx="11" ry="5" fill="currentColor" />
                <ellipse cx="16" cy="7.5" rx="8.2" ry="3" fill="#0d1116" />
                <path d="M5 13.2c2.8 2.7 7.2 3.8 11 3.8 4.2 0 8.4-1.2 11-3.8v4.2c-2.7 2.7-7.1 3.8-11 3.8-4 0-8.2-1.1-11-3.8v-4.2z" fill="#0d1116" opacity="0.22" />
                <ellipse cx="16" cy="24.5" rx="8.2" ry="2.8" fill="#0d1116" opacity="0.22" />
                <circle cx="9" cy="13" r="1" fill="#0d1116" />
                <circle cx="9" cy="19" r="1" fill="#0d1116" />
                <circle cx="9" cy="25" r="1" fill="#0d1116" />
              </svg>
              SQL &amp; Databases
            </h3>
            <p>
              Querying databases, joins, aggregations, CTEs, and window functions to extract and combine datasets.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Core Concepts:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3><BarChartIcon className="skill-logo" aria-hidden="true" />Data Visualization</h3>
            <p>
              Building clear dashboards and reports using tools like Power BI, Tableau, or Looker.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools &amp; Focus:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>
              <svg className="skill-logo python-logo" viewBox="0 0 256 255" role="img" aria-label="Python">
                <path d="M126.916 0.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.746H41.631S0 60.179 0 126.37c0 66.193 36.338 63.804 36.338 63.804h21.658v-30.7s-1.172-36.338 35.74-36.338h61.533s34.55.553 34.55-33.363V33.637S192.886.072 126.916.072zm-34.47 19.302a11.078 11.078 0 1 1 0 22.156 11.078 11.078 0 0 1 0-22.156z" />
                <path d="M129.084 254.928c64.832 0 60.784-28.115 60.784-28.115l-.072-29.128h-61.868v-8.746h86.441S256 194.821 256 128.63c0-66.193-36.338-63.804-36.338-63.804h-21.658v30.7s1.172 36.338-35.74 36.338h-61.533s-34.55-.553-34.55 33.363v56.136s-3.067 33.565 62.903 33.565zm34.47-19.302a11.078 11.078 0 1 1 0-22.156 11.078 11.078 0 0 1 0 22.156z" />
              </svg>
              Programming &amp; Data Prep
            </h3>
            <p>
              Using Python or R (e.g., pandas, NumPy) for data wrangling, automation, and deeper analysis, alongside handling missing values, outliers, and messy data.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;