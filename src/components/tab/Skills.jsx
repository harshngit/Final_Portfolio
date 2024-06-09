import React from 'react'
import '../tab/tab.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { BsFiletypePhp } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
function Skills() {
    return (
        <>
            <div className="skils">
                <div className="skill_heading">
                    <h2>Skills</h2>
                </div>
                <div className="skill_list">
                    <div className="left">
                        <h1>Professional Skills</h1>
                        <ul>
                            <li><FaHtml5 size={30} color='#3E86FC' />HTML/CSS</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" width="80%" className='pro_bar' bgColor="#3E86FC" completed={90} />
                            <li> <IoLogoJavascript size={30} color='#EEFC3E' /> Javascript</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" width="80%" className='pro_bar' bgColor="#EEFC3E" completed={60} />
                            <li> <FaReact size={30} color='#0059FF' />React</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" size={30} width="80%" className='pro_bar' bgColor="#0059FF" completed={70} />
                            <li><DiNodejs size={30} color='#FF0000' />Node.js</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" size={30} width="80%" className='pro_bar' bgColor="#FF0000" completed={40} />
                            <li> <BsFiletypePhp color='0400FF' />Php</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" size={30} width="80%" className='pro_bar' bgColor="#0400FF" completed={80} />
                            <li><SiMysql color='#FF9B00' />MySQl</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" size={30} width="80%" className='pro_bar' bgColor="#FF9B00" completed={80} />
                        </ul>
                    </div>
                    <div className="right">
                        <h1>Interpersonal Skills</h1>
                        <ul>
                            <li>Communication</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" width="80%" className='pro_bar' bgColor="#3E86FC" completed={90} />
                            <li>Leadership</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" width="80%" className='pro_bar' bgColor="#EEFC3E" completed={80} />
                            <li> Adaptability</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" width="80%" className='pro_bar' bgColor="#0059FF" completed={90} />
                            <li>Feedback Delivery</li>
                            <ProgressBar transitionDuration="1s" transitionTimingFunction="ease-in" animateOnRender="false" width="80%" className='pro_bar' bgColor="#FF0000" completed={60} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
