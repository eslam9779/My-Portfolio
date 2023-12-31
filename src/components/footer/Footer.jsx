import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">

                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className='text-dark'>Islam</span>
                            </a>
                            <p className='mt-5'>Full Stack Web Developer Using React And Laravel</p>
                            <div className="social-links d-flex mt-4"   >
                                <a href='https://github.com/eslam9779'><i className="pi pi-github"></i></a>
                                <a href='https://www.facebook.com/eslam.abdo.50/'><i className="pi pi-facebook"></i></a>
                                <a href='https://www.instagram.com/islam_abdo97/'><i className="pi pi-instagram"></i></a>
                                <a href='https://www.linkedin.com/in/eslam-abd-elsattar-aa110b164/'><i className="pi pi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#Home">Home</a></li>
                                <li><a href="#Projects">Projects</a></li>
                                <li><a href="#About">About Me</a></li>
                                <li><a href="#Services">Services</a></li>
                                <li><a href="#Skills">Skills</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>My Services</h4>
                            <ul>
                                <li><a href="#Services">Web Development</a></li>
                                <li><a href="#Services">Front End Development</a></li>
                                <li><a href="#Services">Back End Development</a></li>
                               
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>Faisal Street</p>
                            <p>Giza , Egypt</p>
                            <p className="mt-4"><strong>Phone:</strong> <span>01017392616</span></p>
                            <p><strong>Email:</strong> <span>eslamabdo9779@gmail.com</span></p>
                        </div>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;
