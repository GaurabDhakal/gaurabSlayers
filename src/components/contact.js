import React from 'react'
import emailjs from 'emailjs-com';
import Footer from './components/footer';

function contact(props) {
 const send= function send(e) {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_zf6gy35', e.target, 'user_L2T1HCmWmP1yXeNfXwkL2')
      .then((result) => {
         alert("Email Sent You will be mailed after review!!");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return (
        <div className="container">
          <form onSubmit={send}>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address:</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email"/>
</div><br /><div className="mb-6">
<label htmlFor="exampleFormControlInput1" className="form-label">UID:</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Eg:577247729" name="uid"/>
  <br/>
  <label htmlFor="exampleDataList" className="form-label">What's Your IG Role?</label>
<input className="form-control" name="role" list="datalistOptions" id="exampleDataList" placeholder="What's Your IG Role??" />
<datalist id="datalistOptions">
  <option value="Sniper" />
  <option value="Rusher" />
  <option value="Flanker" />
  <option value="Leader" />
  <option value="Other!" />
</datalist></div>
<div className="mb-26">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Why do you want to Join?</label>
  <textarea name="reason" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div><br />
<input type="submit" value="Submit" className="btn btn-outline-primary"/>
</form>
<Footer/>
        </div>
    )
}


export default contact

