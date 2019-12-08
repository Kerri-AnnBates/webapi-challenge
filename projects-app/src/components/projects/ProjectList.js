import React, { useContext, useState } from 'react'
import { ProjectsContext } from '../../contexts/ProjectsContexts';
import Project from './Project';

function ProjectList(props) {

    // Projects from api
    const projects = useContext(ProjectsContext);

    function editHandler(project) {
        console.log('You edited me!');
        props.history.push(`/edit-project/${project.id}`);
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
                />
            ))}
        </div>
    )
}

export default ProjectList;
