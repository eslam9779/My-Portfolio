import React from 'react'
import './skills.css'
import bootstrap from '../../assets/bootstrap.svg'
import git from '../../assets/git.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import mysql from '../../assets/mysql.svg'
import react from '../../assets/react.svg'
import redux from '../../assets/redux.svg'
import php from '../../assets/php (1).svg'
import laravel from '../../assets/laravel.png'
import redhat from '../../assets/redhat.png'
import type_script from '../../assets/typescript.svg'
import nodejs from '../../assets/nodejs.png'
import docker from '../../assets/docker.png'

const Skills = () => {

  const BACKEndSkills = [
    {
      skill: "PHP",
      img: php
    },
    {
      skill: "LARAVEL",
      img: laravel
    },
    {
      skill: "Red HAT",
      img: redhat
    },
   
    {
      skill: "NodeJS",
      img: nodejs
    },
    {
      skill: " Docker",
      img: docker
    },
    {
      skill: "MY SQL",
      img: mysql
    },
    
  ];
  const frontEndSkills = [
    {
      skill: "HTML5",
      img: html
    },
    {
      skill: "CSS3",
      img: css

    },
    {
      skill: "JAVE SCRIPT",
      img: js

    },
    {
      skill: "BOOTSTRAP",
      img: bootstrap

    },
    {
      skill: "Git",
      img: git

    },
    {
      skill: "REACT JS",
      img: react

    },
    {
      skill: "Redux",
      img: redux
    }, 
    {
      skill: "Type Script",
      img: type_script
    },
    

  ];
  return (
    <div className='skills' id='Skills'>
      <div className=' section-title '>
        <h2 className='gradient__text'>SKILLS</h2>
        <p>My Technical Level</p>
      </div>


      <div className='skills_section section__padding'>
        {frontEndSkills.map((item,index) =>
          <div className='skill_row' key={index}>
            <img src={item.img} style={{ width: "80px" }} />
            <p>{item.skill}</p>
          </div>

        )}

      </div>

      <div className='skills_section section__padding'>
      {BACKEndSkills.map((item,index) =>
        <div className='skill_row' key={index}>
          <img src={item.img} style={{ width: "100px" }} />
          <p>{item.skill}</p>
        </div>

      )}
    </div>

    </div>

   
  )
}

export default Skills
