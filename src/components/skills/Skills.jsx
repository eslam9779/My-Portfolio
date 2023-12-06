import React from 'react'
import './skills.css'

const Skills = () => {
  const BACKEndSkills = [
    {
      skill: "PHP",
      level: "Very good"
    },
    {
      skill: "LARAVEL",
      level: "Very good"
    },
    {
      skill: "MY SQL",
      level: "Very good"
    },
    {
      skill: "NodeJS",
      level: "Intermediate"
    },
    {
      skill: " Docker",
      level: "Intermediate"
    },
    {
      skill: "Red HAT",
      level: "Intermediate"
    },
  ];
  const frontEndSkills = [
    {
      skill: "HTML5",
      level: "Very good"
    },
    {
      skill: "CSS3",
      level: "Very good"

    },
    {
      skill: "JAVE SCRIPT",
      level: "Very good"

    },
    {
      skill: "BOOTSTRAP",
      level: "Intermediate"

    },
    {
      skill: "REACT JS",
      level: "Very good"

    },
    {
      skill: "ANGULAR JS",
      level: "Intermediate"
    },

  ];
  return (
    <div className='skills section__padding' id='skills'>
      <div className='skills__header'>
        <h1 className=''>SKILLS</h1>
        <p>My Technical Level</p>
      </div>

      <div className='skills__containeer'>
        <div className='skills__containeer-frontend'>
          <h2>FrontEnd  Development</h2>
          {frontEndSkills.map((item, index) =>
            <div className='items' key={index}>
             <h4> <i className='pi pi-check-circle'  style={{ color: "green" }}></i>   {item.skill}</h4>
              <p>{item.level}</p>
            </div>

          )}
        </div>
        <div className='skills__containeer-backend'>
          <h2>BackEnd Development</h2>
          {BACKEndSkills.map((item, index) =>
            <div className='items' key={index}>
             <h4> <i className='pi pi-check-circle'  style={{ color: "green" }}></i>   {item.skill}</h4>
              <p>{item.level}</p>
            </div>

          )}

        </div>
      </div>
    </div>
  )
}

export default Skills
