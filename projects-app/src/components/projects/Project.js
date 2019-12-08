import React, { useEffect } from 'react'
import EditForm from '../forms/EditForm';
import axios from 'axios';

function Project(props) {
    const { project } = props;

    function editHandler(project) {
        console.log('You edited me!');
        // props.history.push(`/edit-project/${project.id}`);
        document.querySelector(`.project-${project.id} .edit-form`).classList.toggle('show-form');
    }

    function deleteHandler(id) {
        axios.delete(`http://localhost:4000/projects/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error.status);
            })
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
                    <button className="btn btn-delete" onClick={() => { deleteHandler(project.id) }}>Delete</button>
                    <EditForm project={props.project} />
                </div>
            </div>
        </>
    )
}

export default Project;
