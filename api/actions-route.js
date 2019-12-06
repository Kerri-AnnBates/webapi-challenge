const express = require('express');
const router = express();

const actions = require('../data/helpers/actionModel');
const projects = require('../data/helpers/projectModel');

// GET actions.
router.get('/:id', validateId, (req, res) => {
    const id = req.params.id;
    actions.get(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to retrieve actions' });
        })
});

// DELETE action
router.delete('/:id', validateId, (req, res) => {
    const id = req.params.id;

    actions.remove()
        .then(removedItem => {
            res.status(200).json(removedItem);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to delete actions' });
        })
});

// POST an action. When adding an action, make sure the project_id provided belongs to an existing project
router.post('/', (req, res) => {
    const newAction = req.body;
    /* 
        {
            "project_id": 5,
            "description": "Action description"
        }
    */

    // get projects and see if the action's id matches one of the project's id.
    projects.get(newAction.project_id)
        .then(project => { 
            if(!project) { 
                res.status(404).json({ message: 'No such project Id exist. Unable to add action.' }); 
            }
        });

    actions.insert(newAction)
        .then(actionAdded => {
            res.status(200).json(actionAdded);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to add action' });
        })
});

// Custom middlewar
function validateId(req, res, next) {
    const id = req.params.id;

    actions.get(id)
        .then(action => {
            if (!action) {
                res.status(404).json({ message: 'No such action exists' });
            } else {
                next();
            }
        })
}


module.exports = router;