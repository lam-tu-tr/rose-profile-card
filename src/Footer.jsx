import React from 'react'

import Twitter from "/src/assets/Twitter_Icon.png"
import Facebook from "/src/assets/Facebook_Icon.png"
import Instagram from "/src/assets/Instagram_Icon.png"
import Github from "/src/assets/GitHub_Icon.png"


export default function Footer() {
    return (
        <div id = "social">
            <img src={Twitter} alt="Twitter" width = "25px"/>
            <img src={Facebook} alt="Facebook" />
            <a href="https://www.instagram.com/roses_are_rosie/"><img src={Instagram} alt="Instagram" /></a>
        </div>
    )
}
