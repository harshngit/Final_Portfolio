import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import Work from '../components/Work'

const Project = () => {
    return (
        <>
            <Navbar />
            <Heroimg2 heading="Projects" text="Some of my recent project" />
            <Work />
            <Footer />
        </>
    )
}

export default Project
