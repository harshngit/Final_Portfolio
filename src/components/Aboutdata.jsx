import React from 'react'
import './about.css'
import Aimg from '../assets/about.jpeg'
import { NavLink } from 'react-router-dom'

const Aboutdata = () => {
  return (
    <>
      <div className="about">
        <h1 className="about_title">About me </h1>
        <div className="about_content">
          <div className="left">
            <h1 className="heading">Who Am I ?</h1>
            <p>Hello! I'm a student currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Computer Science (ECS)
              at Atharva College of Engineering. Passionate about technology and innovation, I am dedicated to expanding my knowledge and skills
              in this dynamic field.</p>
            <p>Working in this  domain for last
              5 yrs, has taught me how to solve problems. How to create something that is used by the masses and how to learn new things
            </p>
            <NavLink to="/project" className="btn"> Project </NavLink>
          </div>
          <div className="right">
            <img src={Aimg} alt="aimg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutdata
