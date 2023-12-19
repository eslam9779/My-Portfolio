import React from 'react'
import './services.css'
const Services = () => {

    let serviceList=[
        {
            title:"Full-Stack Web Development",
            describe:"Leverage the power of both React and PHP to create robust and dynamic web applications",
            icon:"pi pi-briefcase"
        },
        {
            title:"React.js Development",
            describe:"Craft modern, single-page applications using React.js And Implement reusable components for efficient and maintainable code.",
            icon:"pi pi-code"
        }, 
        {
            title:"PHP (Laravel) Services",
            describe:"Provide server-side solutions using PHP And laravel for dynamic content generation And Develop custom web applications with them to meet specific business needs",
            icon:"pi pi-check-square"
        }, 
        {
            title:"RESTful API Development",
            describe:"Design and build RESTful APIs using Laravel to enable seamless communication between front-end and back-end systems.Implement secure and efficient data transfer between client and server",
            icon:"pi pi-link"
        },
         {
            title:"Database Integration",
            describe:"Utilize PHP to interact with databases, ensuring data persistence and retrieval.Proficient in working with databases like MySQL to manage and organize data efficiently.",
            icon:"pi pi-database"
        }, 
        
        {
            title:"Responsive Web Design",
            describe:"Create responsive and mobile-friendly web applications to ensure optimal user experience across devices.",
            icon:"pi pi-desktop"
        }, 
      

    ]

    return (
        <div >
            <section id="Services" className="services">

                <div className="container section-title section__padding">
                    <h2 className='gradient__text '>Services</h2>
                    <p>My Services</p>
                </div>

                <div className="container ">

                    <div className="row g-4">
                        {serviceList.map((item,index)=>
                  
                            <div className="col-lg-6 "   key={index}>
                              
                                    <div className="service-item d-flex mx-4">
                                        <div className="icon flex-shrink-0"><i className={item.icon }></i></div>
                                        <div>
                                            <h4 className="service_title ">{item.title}</h4>
                                            <p className="service_description">{item.describe}</p>
                                        </div>
                                    </div>
                               
                                
                               </div>
        
                        )}

                    </div>

                </div>

            </section>


        </div>
    )
}

export default Services
