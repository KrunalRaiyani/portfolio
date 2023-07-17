import React from 'react'

const ProjectCard = (props) => {
    return (
           <a href= {props.link} target = "_blank" style={{color:'white'}}>
             <div className="project-card">
                <img src={props.img} alt="" />
                <div className="project-detail">
                    <h2 className="project-title">{props.name}</h2>
                    <p className="project-description">{props.description}</p>
                </div>
            </div>
           </a>
    )
}

export default ProjectCard