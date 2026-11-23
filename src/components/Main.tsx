import React from "react";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/profile-photo.jpg`} alt="Sourav Ghosh" />
        </div>
        <div className="content">
          <h1>Sourav Ghosh</h1>
          <p>Data Analyst</p>
        </div>
      </div>
    </div>
  );
}

export default Main;