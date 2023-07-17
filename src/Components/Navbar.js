import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [sideMenu,SetSideMenu] = useState(false)

  return (
    <header>
      <nav className="navbar">
        <div className="rightNav"><Link to="/" style={{color:"white",textDecoration:"none"}}>Krunal</Link></div>
        <div className="leftNav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume ">Resume</Link></li>
          </ul>
          <img src="img/bars-solid.svg" className="menu-icon" onClick={()=>SetSideMenu(true)}  alt="menu icon"/>
          <div className="drop-down-menu" style={sideMenu?{transform:"translateX(-100%)"}:{transform: "translateX(0%)"}}>
          <img src="img/circle-xmark-regular.svg" className="close-btn" onClick={()=>SetSideMenu(false)} alt="close icon"/>
            <ul className="nav-links drop-links">
            <li onClick={()=>SetSideMenu(false)}><Link to="/">Home</Link></li>
            <li onClick={()=>SetSideMenu(false)}><Link to="/about">About</Link></li>
            <li onClick={()=>SetSideMenu(false)}><Link to="/projects">Projects</Link></li>
            <li onClick={()=>SetSideMenu(false)}><Link to="/contact">Contact</Link></li>
            <li onClick={()=>SetSideMenu(false)}><Link to="/resume">Resume</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;