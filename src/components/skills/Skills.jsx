import React from 'react'
import './skills.css'

const Skills = () => {
    const frontEndSkills =["HTML5","CSS3","JAVE SCRIPT","BOOTSTRAP","REACT JS","ANGULAR"];
    const BACKEndSkills =["","CSS3","JAVE SCRIPT","BOOTSTRAP","REACT JS","ANGULAR"];
  return (
    <div className='skills section__padding' id='skills'>
        <div className='skills__header'>
          <h1 className='gradient__text'>SKILLS</h1>
          <p>My Technical Level</p>
        </div>

        <div className='skills__containeer'>
          <div className='skills__containeer-frontend'>

          </div>
          <div className='skills__containeer-backend'>

          </div>
        </div>
    </div>
  )
}

export default Skills
