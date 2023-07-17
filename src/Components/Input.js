import React from 'react'

const Input = (props) => {
  return (
    <div className="input-container">
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} />
          </div>
  )
}

export default Input