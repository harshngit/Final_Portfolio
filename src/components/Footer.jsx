import React from 'react'
import "./footer.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="location">
                            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <div>
                                <p>502/5 Om Society Building Moghul lane ,</p>
                                <p>Mahim, Mumbai-16</p>
                            </div>
                        </div>
                        <div className="phone">
                            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +91 7900122449</h4>
                        </div>
                        <div className="mail">
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> nikhargeharsh@gmail.com</h4>
                        </div>
                    </div>

                    <div className="right">
                        <h4>About Me</h4>
                        <p>I am a Web developer with 2 years of experience in web developmeent. My expertise are in Frontend Developing
                            but also worked for backend using php and Mysql. I enjoy discussing new projects and design challenges</p>
                        <div className="social">
                            <FaFacebook size={30} style={{ color: "#0063ff", marginRight: "2rem" }} />
                            <FaInstagram size={30} style={{ color: "#fc00ff", marginRight: "2rem" }} />
                            <FaLinkedin size={30} style={{ color: "#0074ff", marginRight: "2rem" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
