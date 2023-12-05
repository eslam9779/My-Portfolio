import React from 'react'
import './animatedarrow.css'

const AnimatedArrow = () => {
    return (
        <div>
            <div class="arrow-container section__padding" id="arrow-container" onClick={() => {
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: 'smooth'
                })

            }}>
                <div class="arrow" id="arrow"></div>

            </div>
        </div>
    )
}

export default AnimatedArrow
