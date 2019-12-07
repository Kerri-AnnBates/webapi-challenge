import React from 'react'
import EditForm from '../forms/EditForm'

function Project({ project, editHandler, changeHandler, inputs }) {

    return (
        <>
            <div className="project-card">
                <div className={`project-${project.id}`}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <button 
                        className="btn btn-edit" 
                        onClick={() => editHandler(project)}
                        onChange={changeHandler}
                    >Edit</button>
                    <button className="btn btn-delete">Delete</button>
                    <EditForm 
                        changeHandler={changeHandler} 
                        inputs={inputs} 
                    />
                </div>
            </div>
        </>
    )
}

export default Project;
