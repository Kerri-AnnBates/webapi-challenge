import React from 'react'
import EditForm from '../forms/EditForm';

function Project(props) {
    const { project } = props;
    
    function editHandler(project) {
        console.log('You edited me!');
        // props.history.push(`/edit-project/${project.id}`);
        document.querySelector(`.project-${project.id} .edit-form`).classList.toggle('show-form');
    }

    return (
        <>
            <div className="project-card">
                <div className={`project project-${project.id}`}>
                    <h3>{props.project.name}</h3>
                    <p>{props.project.description}</p>
                    <button
                        className="btn btn-edit"
                        onClick={() => editHandler(project)}
                    >Edit</button>
                    <button className="btn btn-delete">Delete</button>
                    <EditForm project={props.project} />
                </div>
            </div>
        </>
    )
}

export default Project;
