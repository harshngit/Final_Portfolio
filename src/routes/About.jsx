import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import Aboutdata from '../components/Aboutdata'
import MainTab from '../components/tab/MainTab'
const About = () => {
    return (
        <>
            <Navbar />
            <Heroimg2 heading="About Me" text="Im a friendly Front-End Developer." />
            <Aboutdata />
            <MainTab />
            <Footer />
        </>
    )
}

export default About
