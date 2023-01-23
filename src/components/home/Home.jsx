import "../asset/style/home.css";
import React from "react";
import Navigation from "../asset/Navigation";
import mainImage from "../asset/image/homeimage.jpg";
function Home() {
  console.log(mainImage);
  return (
    <div>
      <Navigation />
      <h1 className="home-page-heading">Welcome to Westcoast Education</h1>
      <div className="home-page-image">
        <img src={mainImage} className="main-image-for-homepage" alt="" />
      </div>
      <h1>Get your dreem education with us</h1>
    </div>
  );
}

export default Home;
