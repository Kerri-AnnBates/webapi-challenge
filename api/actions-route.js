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
// { "project_id": 5, "description": "Action description", "notes": "some notes" }
router.post('/:id', (req, res) => {
    const newAction = req.body;
    const id = req.params.id;

    projects.get(id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: 'No such project exists by that id.' });
            }
        })

    if(newAction.notes && newAction.project_id && newAction.description) {
        actions.insert(newAction)
            .then(actionAdded => {
                res.status(201).json(actionAdded);
            })
            .catch(error => {
                res.status(500).json({ message: 'Unable to add action' });
            })
    } else {
        res.status(400).json({ message: 'Please provide project id number, notes, and description.' });
    }
});

// Custom middlewar
function validateId(req, res, next) {
    const id = req.params.id;

    actions.get(id)
        .then(action => {
            if (!action) {
                res.status(404).json({ message: 'No such action exists by that id.' });
            } else {
                next();
            }
        })
}


module.exports = router;