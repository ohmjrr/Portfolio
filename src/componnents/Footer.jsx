import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-bg" id='port'>
        <div className="header">
            <h1>Portfolio</h1>
        </div>
        <div className="portfolio">
            <div className="port">
                <img src="\image\Image.png" alt="" />
            </div>
            <div className="port">
                <img src="\image\Image (1).png" alt="" />
            </div>
            <div className="port">
                <img src="\image\Image (2).png" alt="" />
            </div>
            <div className="port">
                <img src="\image\Image (4).png" alt="" />
            </div>
            <div className="port">
                <img src="\image\Image (5).png" alt="" />
            </div>
            <div className="port">
                <img src="\image\Image (3).png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Footer