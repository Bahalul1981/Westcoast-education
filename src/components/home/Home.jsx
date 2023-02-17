import "../asset/style/home.css";
import React from "react";
import Navigation from "../asset/Navigation";
import mainImage from "../asset/image/homeimage.jpg";
function Home() {
  console.log(mainImage);
  return (
    <div className="header-div">
      <Navigation />
      <div>
        <h1 className="home-page-heading">Welcome to Westcoast Education</h1>
      </div>
      <div className="home-page-image">
        <img src={mainImage} className="main-image-for-homepage" alt="" />
      </div>
      <div className="footer-div">
        <h1>Get your dreem education with us</h1>
        <p className="footer-copyright">
          {" "}
          &copy; 2023 - 2024 Arvid Dawn Amin All Rights reserved
        </p>
      </div>
    </div>
  );
}

export default Home;
