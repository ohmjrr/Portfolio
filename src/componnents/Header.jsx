import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className='header-bg' id='home'>
        <div className='container-head'>
            <div className='info'>
                <div className='text-data'>
                    <div className='text-one'>Hi!</div>
                    <div className='text-two'>I'm Jirawut Sureerat.</div>
                    <div className='text-three'>a Frontend developer</div>
                    <div className='text-four'>Frontend developer based in Thailand, Bangkok.<br/>I am coding with a clean and beautiful problem <br/>solving in mind </div>
                </div>
                <div className='media-buttons'>
                    <div className='eiei'>Follow me</div>
                    <a href="https://www.facebook.com/jirawut.sureerat" className="link">
                        <img src="\public\image\Facebook.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/" className="link">
                        <img src="\public\image\Ig.png" alt="" />
                    </a>
                </div>
                <div className='b-button'>
                    <button className='b-button-o'>Send Request</button>
                    <a href='Jirawut sureerat.pdf'
                        download="Jirawut sureerat.pdf">
                        <button className='b-button-t'>Download CV</button>
                    </a>
                </div>

            </div>
            <div className='profile-img'>
                <div className='image'>
                    <img src="\public\image\ohmza.png" alt="img" className='profile-image' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header