import React from 'react'
import './about.css'
import { Feature } from '../index'
import Islam_cv from '../../assets/Islam_cv.pdf'

const About = () => {

  return (
    <div className='about section__padding' id='about'>

      <div className='about__header'>
        <h1 className='gradient__text'>ABOUT ME</h1>
        <p>My Introduction</p>
      </div>

      <div className='whoIam section__margin gradient__bg'>
        <div className='whoIam-feature'>
          <Feature title="Who &nbsp;&nbsp;Am &nbsp; I &nbsp;?" text="
          I am a seasoned full-stack web developer specializing in the dynamic 
          combination of React on the front end and Laravel on the back end. With a 
          comprehensive skill set, I excel in crafting seamless user experiences using
           React to build interactive interfaces. On the server side, Laravel allows me to develop robust and scalable back-end solutions, manage
             databases, and implement complex functionalities." />
        </div>
        <div className='about-me'>
          <h1 className='gradient__text'>Know More About Me</h1>
          <a href={Islam_cv} download="islam Abdelsattar cv"><p>Download CV</p></a> 
        </div>

        <div className='whoIam-container'>
          <Feature title="Experience" text=" 2 + Years" />
          <Feature title="Completed" text=" 20 + project" />
          <Feature title="Support" text=" online 24/7" />

        </div>
      </div>

    </div>
  )
}

export default About;
