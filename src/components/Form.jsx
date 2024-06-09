import React, { useState } from 'react'
import "./contact.css"
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { fireDB } from '../firebase/FirebaseConfig'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Form() {
    const [data, setData] = useState({
        name: "",
        lname: "",
        email: "",
        phone: "",
        msg: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )

    });

    const addData = async () => {
        if (data.name === "" || data.lname === "" || data.email === "" || data.phone === "" || data.msg === "") {
            alert("Please fill all the fields")
        }

        const dataRef = collection(fireDB, 'Feedback')

        try {
            await addDoc(dataRef, data)
            alert("Thank You for your feedback")

        } catch (error) {
            console.log(error)
        }

    }

    // const [detail, setDetail] = useState([])

    return (
        <>
            <div className="container_form">
                <form action="">
                    <h1 className="form_title">Contact Us</h1>
                    <div className="row">
                        <label for="fname">First Name:</label>
                        <input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} type="text" placeholder="Your First name" />
                    </div>
                    <div className="row">
                        <label for="lname">Last Name:</label>
                        <input value={data.lname} onChange={(e) => setData({ ...data, lname: e.target.value })} type="text" placeholder="Your Last name" />
                    </div>
                    <div className="row">
                        <label for="email">Email Address:</label>
                        <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} type="text" placeholder="Your Email Address" />
                    </div>
                    <div className="row">
                        <label for="Phone">Phone Number</label>
                        <input type="text" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="Your Phone Number" />
                    </div>
                    <div className="row">
                        <label for="fname">Message</label>
                        <textarea name="msg" value={data.msg} onChange={(e) => setData({ ...data, msg: e.target.value })} cols="30" rows="5" laceholder='Any good advice'></textarea>
                    </div>
                    <input onClick={addData} type="submit" value="Submit" className='btn  ' />
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
