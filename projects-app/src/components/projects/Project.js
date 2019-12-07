import React from 'react'
import EditForm from '../forms/EditForm'

function Project({ project }) {

    return (
        <>
            <div className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete">Delete</button>
                <EditForm />
            </div>
        </>
    )
}

export default Project;
