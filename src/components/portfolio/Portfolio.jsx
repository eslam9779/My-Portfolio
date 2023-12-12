import React from 'react'
import './portfolio.css'
import about from '../../assets/about.jpg'
import ai from '../../assets/ai.png'
import islam2 from '../../assets/islam2.png'
const Portfolio = () => {
    const projects = [
        {
            image: ai,
            header:"Tebian App",
            text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            livePreview: "https://tebian.app/"
        },  {
            image: islam2,
            header:"Tebian App",
            // text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            livePreview: "https://tebian.app/"
        },  {
            image: ai,
            header:"Tebian App",
            // text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            livePreview: "https://tebian.app/"
        },
    ]
    return (
        <div className='portfolio section__padding' id='portfolio'>
            <div className="portfolio__header">
                <h1>Portfolio</h1>
                <p>Things I’ve built so far</p>
            </div>

            <div className='portfolio__containeer'>
                {projects.map((item)=>
                <div className="portfolio__containeer-card">
                    <img src={item.image} alt="Avatar" className="image" />
                    <div className="middle">
                        <div className="text">
                            <h1>{item.header}</h1>
                        </div>
                    </div>

                </div>
                )}
            </div>

        </div>
    )
}

export default Portfolio
