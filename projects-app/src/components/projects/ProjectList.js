import React, { useContext, useState } from 'react'
import { ProjectsContext } from '../../contexts/ProjectsContexts';
import Project from './Project';

function ProjectList() {

    // Projects from api
    const projects = useContext(ProjectsContext);
    const [inputs, setInputs] = useState({
        name: '',
        description: ''
    });

    function changeHandler(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    function editHandler(project) {
        console.log('You edited me!');
        document.querySelector(`.project-${project.id} .edit-form`).classList.toggle('show-form');
    }

    return (
        <div className="project-wrapper">
            <div>
            <h2>Your Projects</h2>
            <button className="btn btn-add">Add</button>
            </div>
            {projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                    editHandler={editHandler}
                    changeHandler={changeHandler}
                    inputs={inputs}
                />
            ))}
        </div>
    )
}

export default ProjectList;
