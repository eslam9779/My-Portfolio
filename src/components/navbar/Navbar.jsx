import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='nav__bar '>
            <div className='nav__bar-name '>
                {/* <i className='pi pi-user' ></i> */}
                <h2 className=''style={{color:"#1af7ff",cursor:"pointer"}}>Islam</h2>
            </div>
            <div className='nav__bar-links'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact</a></li>
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
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#services'>Services</a></li>
                            <li><a href='#portfolio'>Portfolio</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </div>

                    </div>
                )

                }
            </div>
        </div>




    )
}

export default Navbar
