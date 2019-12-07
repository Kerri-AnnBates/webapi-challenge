import React from 'react'

function EditForm({ changeHandler, inputs }) {

    return (
        <div>
            <h3>Edit Project</h3>
            <form className="edit-form">
                <label htmlFor="name">Name: <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    // onChange={changeHandler} 
                    // value={inputs.name} 
                /></label>
                <label htmlFor="desc">Description:
                <textarea 
                    id="desc" 
                    name="description"
                    // onChange={changeHandler}
                    // value={inputs.description}
                ></textarea></label>
                <button className="btn btn-save">Save</button>
            </form>
        </div>
    )
}

export default EditForm;
