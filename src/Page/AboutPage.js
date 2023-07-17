import React, { useEffect } from 'react'
import About from '../Components/About'

const AboutPage = (props) => {
    useEffect(() => {
        document.title = "Portfolio - About Page"
        props.setProgress(100)
        setTimeout(() => {
            props.setProgress(0)
        }, 10);
       }, [])
    return (
        <main className='main-container'>
            <About/>
        </main>
    )
}

export default AboutPage