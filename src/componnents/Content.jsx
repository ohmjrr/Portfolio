import React from 'react'
import './Content.css'

function Content() {
  return (
    <div className='content-bg' id='contact'>
        <div className="title">About Me</div>
        <div className="contents">
           <div className="pic">
            <div className="detail-l">
                <img src="\image\ohmm.jpg" alt="ohm" className='ohmm' />
            </div>
           </div>

           <div className="about-me">
            <div className="detail-a">  
                Hello, my name is Jirawut Sureerat, but you can call me Ohm. I graduated from the Faculty of Economics at Kasetsart University. However, I recently discovered that I enjoy programming more than economics, so I decided to enroll in Tech Up to pursue my passion.
            </div>
            <div className="hobie">
                As for my hobbies, I enjoy playing games, reading books, watching movies, listening to music, and in my free time, I like to study programming knowledge. I'm interested in programming because as a programmer, one must constantly learn and adapt.
            </div>
            <div className="edu">
                
            </div>
           </div>
        </div>

    </div>
  )
}

export default Content