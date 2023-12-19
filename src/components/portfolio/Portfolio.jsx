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
        <div className='portfolio section__padding' id='Portfolio'>
            <div className="section-title">
                <h2 className='gradient__text'>Projects</h2>
                <p>Things I’ve built so far</p>
            </div>

            <div className='portfolio__containeer-buttons'>

                <button className={type == "" ? 'active' : ''} onClick={() => setType("")}>All</button>
                <button className={type == "social" ? 'active' : ''} onClick={() => setType("social")}>Social Media</button>
                <button className={type == "landing" ? 'active' : ''} onClick={() => setType("landing")}>Landing Pages</button>
                <button className={type == "education" ? 'active' : ''} onClick={() => setType("education")}>Education</button>

            </div>

            <div className='portfolio__containeer'>

                {projects.filter((arrItem) => (type === "" ? true : arrItem.type === type)).map((item, index) =>

                    <div className="portfolio__containeer-card" key={index}  style={{ backgroundImage: `url(${item.image})`,height:"250px",backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
                        <img src={item.image} alt="Avatar" className="portfolio__containeer-card_image" />
                        <div className="portfolio__containeer-card_middle">
                            <div className="portfolio__containeer-card_text">
                                <h1 className='header'>{item.header}</h1>
                                <div className='portfolio__containeer-card_links'>
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
