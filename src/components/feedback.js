import React from 'react'
import emailjs from 'emailjs-com';
import Footer from './footer.js';

function feedback() {
    const send= function send(e) {
        e.preventDefault();

        emailjs.sendForm('Gmail', 'template_n51ozj8', e.target, 'user_L2T1HCmWmP1yXeNfXwkL2')
          .then((result) => {
             alert("Thank You For Your Feedback!!");
          }, (error) => {
              console.log("Something Went Wrong!!");
          });
          e.target.reset()
      }
    return (
<div className="container">
          <form onSubmit={send}><br/>
          <h3 align="center">Give Us Feedback!!</h3>
          <p align="center">So that we can Improve!!</p>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address:</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email"/>
</div><br /><div className="mb-6">
<label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Eg:I found glitch in your website!" name="subject"/>
  <br/>
</div>
<div className="mb-26">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Feedback:-</label>
  <textarea name="feedback" placeholder="Eg: There is Problem in Your Navigation Bar!" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div><br />
<input type="submit" value="Submit" className="btn btn-outline-primary"/>
</form>
<Footer/>
        </div>
    )
}

export default feedback
