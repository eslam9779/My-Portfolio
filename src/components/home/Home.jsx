import React from 'react'
import './home.css'
import islam from '../../assets/islam2.png'

const Home = () => {
  return (
    <div className='home section__padding' id='home'>

      <div className='home-links'>
        <a href='https://www.instagram.com/islam_abdo97/'><i className="pi pi-instagram" style={{ color: "#c32aa3" }} title="Instagram"></i></a>
        <a href='https://www.linkedin.com/in/eslam-abd-elsattar-aa110b164/' style={{ color: " #0a66c2" }} title="LinkedIn"><i className="pi pi-linkedin"></i></a>
        <a href='https://github.com/eslam9779'><i className="pi pi-github" style={{ color: " white" }} title="Git Hub"></i></a>
        <a href='https://www.facebook.com/eslam.abdo.50/'><i className="pi pi-facebook" style={{ color: " #1877f2" }} title="FaceBook"></i> </a>
      </div>

      <div className='home-text'>
        <div className='name'>
          <span class="text">&nbsp;Islam&nbsp;Abdelsattar&nbsp;</span>
          <span class="hover-text">&nbsp;Islam&nbsp;Abdelsattar&nbsp;</span>
        </div> 
         <h3> <div style={{height:"2px",width:"3rem",backgroundColor:"gray",display:"inline-block"}}/>  Web Developer</h3>
        <p>A passionate web developer with a focus on building dynamic
          and engaging user experiences.
          {/* I specialize in utilizing React for front-end development and PHP for server-side scripting */}
        </p>

        <a href='#contact'> Contact Me  <i className='pi pi-send' style={{ fontSize: "1.2rem", marginLeft: ".5rem" }}></i></a>
      </div>

      <div className='home-image '>
        {/* <img src={islam} style={{opacity:"",width:"100%"}}></img> */}
      </div>
      
    </div>
  )
}

export default Home;
