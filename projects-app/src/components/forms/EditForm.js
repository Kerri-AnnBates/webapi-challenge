import React, { useContext, useEffect, useState } from 'react'
import { ProjectsContext } from '../../contexts/ProjectsContexts';
import axios from 'axios';

function EditForm(props) {
    // const id = props.match.params.id;
    const {project} = props;
    
    const [inputs, setInputs] = useState({
        name: '',
        description: ''
    });

    // GET project by id
    useEffect(() => {
        axios.get(`http://localhost:4000/projects/${project.id}`)
            .then(project => {
                console.log(project.data);
                setInputs({
                    ...inputs,
                    name: project.data.name,
                    description: project.data.description
                });
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    function changeHandler(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    function handleSave() {

    }

    return (
        <div>
            {/* <h3>Edit Project</h3> */}
            <form className="edit-form">
                <label htmlFor="name">Name: <input
                    type="text"
                    id="name"
                    name="name"
                onChange={changeHandler} 
                value={inputs.name} 
                /></label>
                <label htmlFor="desc">Description:
                <textarea
                        id="desc"
                        name="description"
                    onChange={changeHandler}
                    value={inputs.description}
                    ></textarea></label>
                <button className="btn btn-save">Save</button>
            </form>
        </div>
    )
}

export default EditForm;
