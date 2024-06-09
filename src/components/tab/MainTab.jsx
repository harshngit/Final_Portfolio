import React from 'react'
import '../tab/tab.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Experience from './Experience';
import Skills from './Skills';
import { BsDownload } from 'react-icons/bs';
import resume from '../../assets/resume.pdf';
import { Link } from 'react-router-dom';
function MainTab() {
    return (
        <>
            <div className="main">
                <div className="main_heading">
                    <h1 className='title'> More About me. </h1>
                </div>
                <div className="tabs">
                    <Tabs defaultIndex={0} className=" " >
                        <TabList className="tablist">
                            <Tab>
                                <div className="tab">
                                    <h1>Experience</h1>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="tab">
                                    <h1>Skills</h1>
                                </div>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Experience />
                            <div className='download'>
                                <Link to="/project"><a rel="noreferrer" className='btn'>Project</a></Link>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <Skills />
                            <div className='download'>
                                <a rel="noreferrer" className='btn' href={resume} download="Resume" target='_blank'><BsDownload /> Download</a>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default MainTab
