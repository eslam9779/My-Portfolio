// import React, { useState } from 'react'
// import './qualification.css'
// qualification.css
/* Add your styles here */

// Qualification.js
import React, { useState } from 'react';
import './qualification.css';
import { Button } from 'primereact/button';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';

const Qualification = () => {
    const [toggle, setToggle] = useState(true);

    const education = [
        { status: 'ITI', date: '3/1/2023', text: 'Intensive Coding Camp - Full Stack Web Development Using PHP From Information Technology Institute (ITI)', color: '#FF9800' },
        { status: 'Faculty Of Computer Science And AI', date: '8/1/2015', text: 'Bachelor Of Computer Science From Faculty Of Computer Science And Artificial intelligence Cairo University 2015 ', color: '#607D8B' }
    ];

    const Experience = [
        { status: 'Almotahida Education Group', date: 'Currently Work Here', text: 'Full Stack Web Developer With laravel And React', color: '#673AB7' },
        { status: 'ITI', date: '3/1/2023', text: 'Intensive Coding Camp - Full Stack Web Development Using PHP From Information Technology Institute (ITI)', color: '#FF9800' },
        { status: 'Front End Work Shop', date: '7/1/2019', text: '3 Months Training As a FrontEnd Developer', color: '#607D8B' },

    ];

    const customizedContent = (item) => (
        <Card title={item.status} subTitle={item.date} style={{ color: item.color, padding: '20px', direction: 'ltr', }}>
            <p style={{ paddingTop: '1rem' }}>{item.text}</p>
        </Card>
    );

    const customizedMarker = () => (
        <span className="material-symbols-outlined">
            radio_button_checked
        </span>
    );

    const getEducationUi = () => (
        <Timeline value={education} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
    ); 
     const getExperienceUi = () => (
        <Timeline value={Experience} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
    );

    return (
        <div className="qualification section__padding" id='qualification'>
            <div className="qualification__header">
                <h1>Qualifications</h1>
                <p>My personal journey</p>
            </div>

            <div className='qualification__containeer'>

            <div className='qualification__containeer-buttons'>

                    <div>
                        <Button text onClick={() => setToggle(true)}>
                            <span className="material-symbols-outlined" style={{ color: "black" }}>school</span> &nbsp; Education
                        </Button>
                    </div>
                    <div>
                        <Button  text onClick={() => setToggle(false)}>
                                <span className="material-symbols-outlined" style={{ color: "black" }}>shopping_bag</span> &nbsp;  Experience

                        </Button>
                    </div>
            </div>
        </div>
            <div className="qualification__timeline">
                <div style={toggle ? { display: '' } : { display: 'none' }}>
                    {getEducationUi()}
                </div>
                <div style={!toggle ? { display: '' } : { display: 'none' }}>
                    {getExperienceUi()}
                </div>
            </div>
        </div>
    );
};

export default Qualification;
