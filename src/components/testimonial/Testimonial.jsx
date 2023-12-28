import React from 'react';
import './testimonial.css'
import testimonial1 from '../../assets/testimonial1.png'
import testimonial2 from '../../assets/testimonial2.png'
import testimonial3 from '../../assets/testimonial3.png'

const Testimonial = () => {

    const testimonials = [
        {
            img: testimonial1,
            name: "john Doe",
            position:"Web Developer",
            text: "A really good job ,all aspects of the project were followed step by step and with a good result"
        },
        {
            img: testimonial2,
            name: "Lily	 Jacob",
            position:"Web Developer",
            text: "We have the fortune of working with Islam on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined"
        },
        {
            img: testimonial3,
            name: "Olivia James",
            position:"Web Developer",
            text: " Working With You was Better Than expected and we had really high expectations. You are an incredibly talented developer but what really makes you stand out is Your work ethic and steady approach "
        },



    ];




    return (
        <div className='testimonial section__padding'>
            <div className="section-title">
                <h2 className='gradient__text'>Testimonial</h2>
                <p>My client Saying</p>
            </div>


            <div className="container">
                <div className="row">
                    {testimonials.map((item,index)=>
                   
                    <div className="col-lg-4" key={index}>
                        <div className="card">
                            <div className="face front-face ">
                                <img src={item.img}  style={{borderRadius:"50%"}}/>
                                <div className="pt-3 text-uppercase name">
                                    {item.name}
                                </div>
                                <div className="designation">{item.position}</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                   {item.text}
                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                     )}
                </div>
            </div>


        </div>
    )
}

export default Testimonial
