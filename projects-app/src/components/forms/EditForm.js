import React from 'react'

function EditForm() {
    return (
        <div>
            <form>
                <label htmlFor="name">Name: <input type="text" id="name" /></label>
                <label htmlFor="desc">Description:
                <textarea id="desc"></textarea></label>
            </form>
        </div>
    )
}

export default EditForm;
