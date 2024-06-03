import React, { useState } from 'react'
import "./contact.css"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Form = () => {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        msg: ''
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,

            }
        })
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert("Recorded")
    }
    return (
        <>
            <div className="container_form">
                <form action="" onSubmit={formSubmit}>
                    <h1 className="form_title">Contact Us</h1>
                    <div className="row">
                        <label for="fname">First Name:</label>
                        <input type="text" id="fname" name="fname" value={data.fname} onChange={InputEvent} placeholder="Your First name" />
                    </div>
                    <div className="row">
                        <label for="lname">Last Name:</label>
                        <input type="text" id="lname" name="lname" value={data.lname} onChange={InputEvent} placeholder="Your Last name" />
                    </div>
                    <div className="row">
                        <label for="email">Email Address:</label>
                        <input type="text" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="Your Email Address" />
                    </div>
                    <div className="row">
                        <label for="Phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder="Your Phone Number" />
                    </div>
                    <div className="row">
                        <label for="fname">Message</label>
                        <textarea name="msg" id="msg" cols="30" rows="5" value={data.msg} onChange={InputEvent} placeholder='Any good advice'></textarea>
                    </div>
                    <input type="submit" value="Submit" className='btn  ' />
                </form>
                <div className='icons'>
                    <FaFacebook size={30} style={{ color: "#0063ff", marginRight: "2rem" }} />
                    <FaInstagram size={30} style={{ color: "#fc00ff", marginRight: "2rem" }} />
                    <FaLinkedin size={30} style={{ color: "#0074ff", marginRight: "2rem" }} />
                </div>
            </div>
        </>
    )
}

export default Form
