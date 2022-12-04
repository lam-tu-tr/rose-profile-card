import React from 'react'
import Mail from '/src/assets/Mail.png'
import Linkedin from '/src/assets/Linkedin.png'

export default function Heading() {
    return (
        <div>
            <img src="/src/assets/Rose.png" alt='rose' width="320px" id ="rose"/>
            <h1>Roseanne Park</h1>
            <h4>Blackpink</h4>
            <h5>Main Vocalist, Lead Dancer</h5>

            <div id = "btn">
                <button id = "profile-btn"><img src={Mail} alt="Mail-icon" /> Profile</button>
                <button id = "linkedin-btn"><img src={Linkedin} alt="Linkedin-icon" /> Website</button>
            </div>
        </div>
    )
}
