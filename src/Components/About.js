import React, { useState, useEffect } from 'react'
import SkillBar from './SkillBar'

const About = ( ) => {

  const [leval, setLeval] = useState({
    html: "10%",
    css: "8%",
    javascript: "15%",
    react: "10%",
    node: "40%"
  })

useEffect(() => {
  let aboutSection = document.querySelector(".about");

  const skillObserver = new IntersectionObserver((entries,observer)=>{
    const [entry] = entries;
    console.log(entry)
    
      
    if (entry.isIntersecting) {
      observer.unobserve(aboutSection)  
      return setLeval({
        html: "90%",
        css: "80%",
        javascript: "75%",
        react: "70%",
        node: "60%"
      })
    }
  },{
    root:null,
    threshold:0,
  })
  skillObserver.observe(aboutSection)
 
}, [])





  return (
    <section className="about-section" >
      <h2 className="title-text about-text">About Us</h2>
      <div className="about">
        <img src="img/dev.png" alt="Hero" />
        <div className="about-chart">
          <h2>Learning</h2>
          <p>
            I am a full-stack developer with expertise in web development. I have successfully completed a comprehensive course on a trusted platform Udemy.
          </p>
          <h2>Skills</h2>
          <SkillBar name="Html" level={leval.html} />
          <SkillBar name="Css" level={leval.css} />
          <SkillBar name="Javascript" level={leval.javascript} />
          <SkillBar name="React" level={leval.react} />
          <SkillBar name="Node js , Mongo db" level={leval.node} />
        </div>
      </div>
    </section>
  )
}

export default About