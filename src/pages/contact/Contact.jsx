import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className='contact'>
      <form action="/">
        <input type="text" placeholder="Name" 
        required/>
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
