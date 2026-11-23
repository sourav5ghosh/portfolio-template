import React from "react";
import Chip from '@mui/material/Chip';
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
        <h1>Skills</h1>
        <div className="skills-grid">
          <div className="skill">
            <h3>SQL &amp; Databases</h3>
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
            <h3>Data Visualization</h3>
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
            <h3>Programming &amp; Data Prep</h3>
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