import React from 'react'
import "./Hero.css"
import Bgimg from "../assets/bg.jpg"
import { Link } from 'react-router-dom'
const Heroimg = () => {
    return (
        <>
            <div className="hero">
                <div className='mask'>
                    <img src={Bgimg} alt="bgimg" className="intro_img" />
                </div>
                <div className="content">
                    <p>Hi, I'm Web Developer</p>
                    <h1>React Developer</h1>
                    <div>
                        <Link to="/project" className='btn'>Project</Link>
                        <Link to="/contact" className='btn-light'>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heroimg
