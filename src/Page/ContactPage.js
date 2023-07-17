import React, { useEffect } from 'react'
import Contact from '../Components/Contact'

const ContactPage = (props) => {
    useEffect(() => {
        document.title = "Portfolio - Contact Page"
        props.setProgress(100)
        setTimeout(() => {
            props.setProgress(0)
        }, 10);
       }, [])
    return (
        <main className='main-container'>
            <Contact />
        </main>

    )
}

export default ContactPage