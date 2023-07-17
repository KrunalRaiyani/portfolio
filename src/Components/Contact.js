import React from 'react'
import Input from './Input'

const Contact = () => {
  return (
    <section className="contect-section">
        <h2 className="title-text contect-text">Contact Us</h2>
        <form className="form">
          <Input id="f-name" label="First Name" type="text" placeholder="Enter First Name"/>
          <Input id="l-name" label="Last Name" type="text" placeholder="Enter Last Name"/>
          <Input id="email" label="Email" type="email" placeholder="Enter Your Email"/>
          <Input id="number" label="Phone" type="number" placeholder="Enter Phone Number"/>
          <Input id="city" label="City" type="text" placeholder="Enter City Name"/>
          <Input id="date" label="Date" type="date" placeholder="Enter Date"/>
          <div className="input-container textarea-container">
            <label htmlFor="discription">Discription</label>
            <textarea name="textarea" id="discription"  placeholder="Write here ..."></textarea>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </section>
  )
}

export default Contact