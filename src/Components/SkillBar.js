import React from 'react'

const SkillBar = (props) => {
    return (
        <div className="skill-container">
            <div className="skill-level" style={{width:props.level}}>{props.name}</div>
        </div>
    )
}

export default SkillBar