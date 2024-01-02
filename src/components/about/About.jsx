import React from 'react'
import './about.css'
import { Feature } from '../index'
import Islam_cv from '../../assets/Islam_cv.pdf'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const About = ({ children, fromLeft, to }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : window.innerWidth > 768 ? 'translateX(-100%)' : 'translateX(-50%)',
    config: { duration: window.innerWidth > 768 ? 900 : 500 }, // Adjust duration based on screen size
  });

  return     <animated.div ref={ref} style={animationProps}>


    <div className='about section__padding' id='About'>

      <div className='about__header section-title'>
        <h2 className='gradient__text'>ABOUT ME</h2>
        <p>My Introduction</p>
      </div>

      <div className='whoIam section__margin '>
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
          <a href={Islam_cv} download="islam Abdelsattar cv">Download CV</a> 
        </div>

        <div className='whoIam-container'>
          <Feature title="Experience" text=" 2 + Years" />
          <Feature title="Completed" text=" 20 + project" />
          <Feature title="Support" text=" online 24/7" />

        </div>
      </div>

    </div>
    </animated.div>;
}

export default About;
