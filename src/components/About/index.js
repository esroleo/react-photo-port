import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    //my-5 is spacing in react
  return (
    <section className="my-5"> 
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;