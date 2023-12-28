import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [links, setLinks] = useState(["Home", "About", "Skills", "Services", "Projects","Qualifications" ,"Contact"]);

    return (
        <div className='nav__bar '>

            <div className='nav__bar-name '>
                <h2>Islam</h2>
            </div>

            <div className='nav__bar-links'>
                <ul>
                    {links.map((link,index) =>
                        <li key={index}><a href={"#" + link}>{link}</a></li>
                    )}
                </ul>
            </div>

            <div className='navbar-menu'>

                {toggleMenu ?
                    <RiCloseLine color='#fff' size={20} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu_containeer scale-up-center'>
                        <div className='navbar-menu_containeer-links'>
                            {links.map((link,index) =>
                                <li key={index}><a href={"#" + link}>{link}</a></li>
                            )}
                        </div>

                    </div>
                )

                }
            </div>
        </div>




    )
}

export default Navbar
