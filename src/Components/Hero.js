import React,{useEffect,useRef} from 'react'
import Typed from 'typed.js';

const Hero = () => {
  const ref = useRef()
   useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ['Frontend Developer', 'Backend Developer','Web Developer'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section">
        <div className="hero-right">
          <div className="hero-text">
            Hi,My name is <span className="name">Krunal</span>
          </div>
          <div className="hero-text">and iam a passinate</div>
         <div> <span className="hero-text name" ref={ref}></span></div>
          {/* <div className="hero-text name animated-name" ref={ref}></div> */}
        </div>
        <div className="hero-left">
          <img src="/img/hero.png" alt="Hero" />
        </div>
      </section>
  )
}

export default Hero