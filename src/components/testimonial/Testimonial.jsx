import React from 'react';
import './testimonial.css'
import { Carousel } from 'primereact/carousel';
import testimonial1 from '../../assets/testimonial1.png'

const Testimonial = () => {

    const products = [
        {
            img: testimonial1,
            name: "john Doe",
            text: "A really good job ,all aspects of the project were followed step by step and with a good result"
        },

    ];
   


    
    return (
        <div className='testimonial section__padding'>
            <div className="portfolio__header">
                <h1>Testimonial</h1>
                <p>My client Saying</p>
            </div>
           
        </div>
    )
}

export default Testimonial
