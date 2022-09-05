import React from 'react'
import './style.css';
const ContactMe = () => {
  return (
<div className='userData' id='contactMe'>
<div className="head">
    <h1>Contact Me</h1>
</div>
<label htmlFor="name" className='lbl'>Name</label>
<input type="text"className='ipt' placeholder='Name'/>
<label htmlFor="email" className='lbl'>Email</label>
<input type="text"className='ipt' placeholder='Email'/>
<label htmlFor="mobile" className='lbl'>Mobile</label>
<input type="mobile"className='ipt' placeholder='Mobile'/>
<textarea name=",essage" id="message" cols="50" rows="5" placeholder=' Your Message'></textarea>
<button className='btn'>Submit</button>
</div> 


)
}

export default ContactMe;