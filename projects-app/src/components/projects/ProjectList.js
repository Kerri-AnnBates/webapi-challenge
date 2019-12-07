import React, { useContext, useState } from 'react'
import { ProjectsContext } from '../../contexts/ProjectsContexts';
import Project from './Project';

function ProjectList() {

    const projects = useContext(ProjectsContext);
    const [inputs, setInputs] = useState({});

    return (
        <div className="project-wrapper">
            <h2>Your Projects</h2>
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    )
}

export default ProjectList;
