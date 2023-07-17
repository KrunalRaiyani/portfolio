import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = (props) => {
    return (
        <section className="project-section">
            <h2 className="title-text project-text"  style={props.projectStyle}>Projects</h2>
            <div className="project-container">
                <ProjectCard img = 'img/note.png' name = 'iNotebook' description = 'This project made with Html, Css, Bootstrap, Javascript, React js, Node js, and Mongo db' link = 'https://inotebook-todo-app.netlify.app/' />
                <ProjectCard img = 'img/youtube.png' name = 'YouTube' description = 'This project made with Html, Css ,Javascript, and React js' link = 'https://youtube-cloneproject.netlify.app/' />
                <ProjectCard img = 'img/gaana.png' name = 'Gaana' description = 'This project made with Html, Css , and Javascript' link = 'https://krunalraiyani.github.io/gaana-clone/' />
                <ProjectCard img = 'img/store.png' name = 'myStore' description = 'This project made with Html, Css , and Javascript' link = 'https://krunalraiyani.github.io/grocery-store/' />
                <ProjectCard img = 'img/game.png' name = 'Snake game' description = 'This project made with Html, Css , and Javascript' link = 'https://krunalraiyani.github.io/snake-game/' />
                <ProjectCard img = 'img/news.png' name = 'News Point' description = 'This project made with Html, Css, Bootstrap, Javascript React js' link = 'https://newspoint-project.netlify.app/' />
            </div>
        </section>
    )
}

export default Projects