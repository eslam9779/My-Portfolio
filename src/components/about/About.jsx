import React from 'react'
import './about.css'
import islam2 from '../../assets/islam2.png'
import Islam_cv from '../../assets/Islam_cv.pdf'
const About = () => {
  const section = [
    {
      icon: 'pi-stopwatch',
      header: "Experience",
      p: "3 + Years"

    },
    {
      icon: 'pi-shopping-bag',
      header: "Completed",
      p: "10 + projects"

    },
    {
      icon: 'pi-share-alt      ',
      header: "Support",
      p: "online 24/7"

    }
  ]
  return (
    <div className='about section__padding' id='about'>

      <div className='about__header'>
        <h1>About Me</h1>
        <p>My Introduction</p>
      </div>

      <div className='about__container'>
        <div className='about__container-img'>
          <img src={islam2} />
        </div>

        <div className='about__container-text'>
          <div className='about__container-text__experience'>
            {section.map((item, index) => 
              <div className='' key={index}>
                <i className={"pi " + item.icon}></i>
                <h3>{item.header}</h3>
                <p>{item.p}</p>

              </div>
            )}


          </div>
          <p>  I specialize in utilizing React for front-end development and PHP for server-side scripting, creating seamless and interactive web applications.</p>
          <a href={Islam_cv} download="CV">Download CV</a>
        </div>
      </div>

    </div>
  )
}

export default About;
