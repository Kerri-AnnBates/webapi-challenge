import React from 'react'

function Project(props) {
    const { project, editHandler } = props;
    // console.log(props)
    return (
        <>
            <div className="project-card">
                <div className={`project-${props.project.id}`}>
                    <h3>{props.project.name}</h3>
                    <p>{props.project.description}</p>
                    <button
                        className="btn btn-edit"
                        onClick={() => editHandler(project)}
                    >Edit</button>
                    <button className="btn btn-delete">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Project;
