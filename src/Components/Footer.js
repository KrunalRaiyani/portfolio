import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div className="lists">
                    <ul>
                        <li className="link-title">Links</li>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Projects</li>
                        <li>Resume</li>
                    </ul>
                    <ul>
                        <li className="link-title">Support</li>
                        <li>Contact</li>
                        <li>Enail</li>
                        <li>FAQ's</li>
                        <li>Privecy</li>
                    </ul>
                    <ul>
                        <li className="link-title">Services</li>
                        <li>Web dev</li>
                        <li>React js</li>
                        <li>Mongo db</li>
                        <li>Node js</li>
                    </ul>
                </div>
                <div className="footer-icons">
                    <p className="social-media-title">Sicial Media</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/krunalraiyani/" target="_blank"
                        ><img src="img/linkedin-in.svg" className="linkedin" alt="linkedin"
                            /></a>
                        <a href="https://github.com/KrunalRaiyani" target="_blank"
                        ><img src="img/github.svg" className="github" alt="github"
                            /></a>
                        <a href="https://www.facebook.com/" target="_blank"
                        ><img src="img/facebook-f.svg" className="fb" alt="facebook"
                            /></a>
                        <a href="https://www.instagram.com/" target="_blank"
                        ><img src="img/instagram.svg" className="insta" alt="instagram"
                            /></a>
                        <a href="https://www.youtube.com/" target="_blank"
                        ><img src="img/youtube.svg" className="yt" alt="youtube"
                            /></a>
                    </div>
                </div>
            </div>

            <div className="copy">&copy; Copyright @2023 All Rights Reserved</div>
        </footer>
    )
}

export default Footer