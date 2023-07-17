import React, { useEffect } from 'react'

const ErrorPage = (props) => {
  useEffect(() => {
    document.title = "Error - Page Not Found"
    props.setProgress(100)
    setTimeout(() => {
        props.setProgress(0)
    }, 10);
   }, [])
  return (
    <div className='error-page'>
        <h2 className="title-text">Error Page</h2>
       <img src="/img/error.png" alt="" />
       <h2 className='title-text error-msg'>Error 404 Page Not Found</h2>
    </div>
  )
}

export default ErrorPage