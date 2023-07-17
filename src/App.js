import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import AboutPage from './Page/AboutPage';
import ProjectPage from './Page/ProjectPage';
import ContactPage from './Page/ContactPage';
import LoadingBar from 'react-top-loading-bar';
import ErrorPage from './Page/ErrorPage';

function App() {

  const [progress, setProgress] = useState(10)

  return (
 
    <BrowserRouter>
   <LoadingBar
        color='#bb46ff'
        progress={progress}
        height = {3}
      />
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home key="home" setProgress ={setProgress} />} ></Route>
        <Route exact path="/about"  element={<AboutPage key="about" setProgress ={setProgress} />}></Route>
        <Route exact path="/projects"  element={<ProjectPage key="project" setProgress ={setProgress} />}></Route>
        <Route exact path="/contact"  element={<ContactPage key="contact" setProgress ={setProgress} />}></Route>
        <Route exact path="*"  element={<ErrorPage key="error" setProgress ={setProgress} />}></Route>
      </Routes>
    </BrowserRouter>
 
    
 
  );
}

export default App;
