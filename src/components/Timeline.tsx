import React from "react";
import '../assets/styles/Timeline.scss';

interface EducationRecord {
  year: string;
  qualification: string;
  institution: string;
  scoreOrFocus?: string;
}

const educationRecords: EducationRecord[] = [
  {
    year: "2023 – 2027",
    qualification: "Bachelor of Computer Application (BCA)",
    institution: "Techno India Hooghly Campus",
    scoreOrFocus: "Pursuing"
  },
  {
    year: "2021 – 2023",
    qualification: "Higher Secondary",
    institution: "Baidyapur Ramkrishna Vidyapith",
    scoreOrFocus: "[Science / 62.1%]"
  },
  {
    year: "2021",
    qualification: "Secondary",
    institution: "Bhonpur Jajneswar Vidyapith",
    scoreOrFocus: "[W.B.B.S.E. / 78.7%]"
  }
];

function Timeline() {
  return (
    <section id="history">
      <div className="items-container">
        <h1>Education</h1>
        <ul className="minimal-edu-rail">
          {educationRecords.map((item) => (
            <li key={item.year} className="minimal-edu-item">
              <time className="edu-year">{item.year}</time>
              <div className="edu-meta">
                <span className="edu-degree">{item.qualification}</span>
                <span className="edu-school">{item.institution}</span>
              </div>
              {item.scoreOrFocus && (
                <span className="edu-tag">{item.scoreOrFocus}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Timeline;