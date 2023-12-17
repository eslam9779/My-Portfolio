import React from 'react'
import './services.css'
const Services = () => {
    return (
        <div className='services'>
            <section id="services" class="services">

                <div class="container section-title section__padding header" data-aos="fade-up">
                    <h2  className='hamada'>Services</h2>
                    <p>My Services</p>
                </div>

                <div class="container">

                    <div class="row gy-4">

                        <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item d-flex">
                                <div class="icon flex-shrink-0"><i class="pi pi-briefcase"></i></div>
                                <div>
                                    <h4 class="title"><a href="services-details.html" class="stretched-link">Lorem Ipsum</a></h4>
                                    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
                            <div class="service-item d-flex">
                                <div class="icon flex-shrink-0"><i class="pi pi-check-square"></i></div>
                                <div>
                                    <h4 class="title"><a href="services-details.html" class="stretched-link">Dolor Sitema</a></h4>
                                    <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="300">
                            <div class="service-item d-flex">
                                <div class="icon flex-shrink-0"><i class="pi pi-chart-bar"></i></div>
                                <div>
                                    <h4 class="title"><a href="services-details.html" class="stretched-link">Sed ut perspiciatis</a></h4>
                                    <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="400">
                            <div class="service-item d-flex">
                                <div class="icon flex-shrink-0"><i class="pi pi-calendar-plus"></i></div>
                                <div>
                                    <h4 class="title"><a href="services-details.html" class="stretched-link">Magni Dolores</a></h4>
                                    <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>


        </div>
    )
}

export default Services
