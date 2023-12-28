import React, { useState } from 'react';
import './portfolio.css';
import tebian from '../../assets/123.png';
import Gpt from '../../assets/Gpt.png';
import youTube from '../../assets/YouTube.jpg';
import Twitter from '../../assets/Twitter.avif';
import lifeMarket from '../../assets/lifeMarket.png';
import Coffee from '../../assets/coffie.jpg';

const Portfolio = () => {

    const [type, setType] = useState("");

    const projects = [
        {
            image: Gpt,
            header: "Chat Gpt-3",
            text: "Landing Page For Chat Gpt-3",
            type: "landing",
            link: "https://exquisite-marigold-dd26ed.netlify.app/"
        },
        {
            image: tebian,
            header: "Tebian App",
            text: "An educational platform for schools and teachers that aims to improve student performance and develop the teaching and learning process",
            type: "education",
            link: "https://tebian.app/"
        },
        {
            image: youTube,
            header: "youTube Clone",
            text: " Modern YouTube Clone Application",
            type: "social",
            link: "https://github.com/eslam9779/You-tube-clone"
        },
        {
            image: Twitter,
            header: "Twitter Clone",
            text: "Modern Twitter Clone Application",
            type: "social",
            link: "https://github.com/eslam9779/Twitter-Clone"
        }, {
            image: Coffee,
            header: "Coffe Shop System",
            text: "Coffee Shop System",
            type: "ECommerce",
            link: "https://github.com/eslam9779/Coffe-Shop-System"
        }, {
            image: lifeMarket,
            header: "Life Market E-Commerce UI",
            text: "E-Commerce Web Site For sell And Buy Products",
            type: "ECommerce",
            link: "https://github.com/eslam9779/Life-market-Ecommerce"
        },
        {
            image: lifeMarket,
            header: "Life Market E-Commerce BackEnd ",
            text: "BAckEnd Api's For Life Market E-Commerce",
            type: "ECommerce",
            link: "https://github.com/eslam9779/Life-market-Ecommerce-API"
        },
    ]
    const goToProject = (item) => {

        window.location.href = item.link;

    }



    return (
        <div className='portfolio section__padding' id='Projects'>
            <div className="section-title">
                <h2 className='gradient__text'>Projects</h2>
                <p>Things I’ve built so far</p>
            </div>

            <div className='portfolio__buttons'>

                <button className={type == "" ? 'active' : ''} onClick={() => setType("")}>All</button>
                <button className={type == "social" ? 'active' : ''} onClick={() => setType("social")}>Social Media</button>
                <button className={type == "landing" ? 'active' : ''} onClick={() => setType("landing")}>Landing Pages</button>
                <button className={type == "education" ? 'active' : ''} onClick={() => setType("education")}>Education</button>
                <button className={type == "ECommerce" ? 'active' : ''} onClick={() => setType("ECommerce")}>E-Commerce</button>

            </div>

            <div className='portfolio__containeer'>
                {projects.filter((arrItem) => (type === "" ? true : arrItem.type === type)).map((item, index) =>
                    <div key={index}>
                        
                        <div className="portfolio__containeer-card" onClick={() => goToProject(item)}>
                             <div className="special-ribbon">Special</div>
                            <img src={item.image} className="portfolio__containeer-card-image" />
                            <div className="portfolio__containeer-card-text">{item.text}</div>
                        </div>
                        <div className='Project_header'><h4>{item.header}</h4></div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Portfolio
