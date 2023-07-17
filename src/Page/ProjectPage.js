import React, { useEffect } from 'react'
import Projects from '../Components/Projects'

const ProjectPage = (props) => {
    useEffect(() => {
        document.title = "Portfolio - Project Page"
        props.setProgress(100)
        setTimeout(() => {
            props.setProgress(0)
        }, 10);
       }, [])
    return (
        <main className='main-container' >
            <Projects projectStyle={{marginBottom:"7rem"}} />
        </main>
    )
}

export default ProjectPage