import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-form' id='me'>
        <div className="l-contact">
            <div className="title-con">
                <span>Contact me</span>
            </div>
        </div>
        <div className="r-contact">
          <form>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name="message" className='user' placeholder='Message'></textarea>
            <input type="Submit" value="send" className='button-c'/>
          </form>
        </div>

    </div>
  )
}

export default Contact