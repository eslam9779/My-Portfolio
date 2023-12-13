import React, { useState } from 'react';
import './portfolio.css';
import tebian from '../../assets/tebian.png';
import Gpt from '../../assets/Gpt.png';
import youTube from '../../assets/youTube.png';

const Portfolio = () => {

    const [type, setType] = useState("");

    const projects = [
        {
            image: Gpt,
            header: "Chat Gpt-3",
            text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            type: "landing",
            livePreview: "https://tebian.app/"
        }, {
            image: youTube,
            header: "youTube Clone",
            // text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            type: "social",

            livePreview: "https://tebian.app/"
        }, {
            image: tebian,
            header: "Tebian App",
            // text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            type: "education",
            livePreview: "https://tebian.app/"
        },
        {
            image: Gpt,
            header: "Chat Gpt-3",
            text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            type: "landing",
            livePreview: "https://tebian.app/"
        }, {
            image: youTube,
            header: "youTube Clone",
            // text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            type: "social",
            livePreview: "https://tebian.app/"
        }, {
            image: tebian,
            header: "Tebian App",
            // text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            githup: "",
            type: "education",
            livePreview: "https://tebian.app/"
        },
    ]


    return (
        <div className='portfolio section__padding' id='portfolio'>
            <div className="portfolio__header">
                <h1>Projects</h1>
                <p>Things I’ve built so far</p>
            </div>
            <div className='portfolio__containeer-buttons'>

                <button onClick={() => setType("")}>All</button>
                <button onClick={() => setType("social")}>SocialMedia</button>
                <button onClick={() => setType("landing")}>Landing Pages</button>
                <button onClick={() => setType("education")}>Education</button>

            </div>

            <div className='portfolio__containeer'>

                {projects.filter((arrItem) => (type === "" ? true : arrItem.type === type)).map((item,index) =>

                    <div className="portfolio__containeer-card" key={index}>
                        <img src={item.image} alt="Avatar" className="image" />
                        <div className="middle">
                            <div className="text">
                                <h1 className='header'>{item.header}</h1>
                                <div className='links'>
                                    <a href={item.livePreview}> <p>Show Live Preview</p></a>
                                    <a href={item.livePreview}> <p>GitHup</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Portfolio
