const express = require('express');
const router = express();

const projects = require('../data/helpers/projectModel');

// GET
router.get('/:id', validateId, (req, res) => {
    const id = req.params.id;

    projects.get(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to retrieve projects' });
        })
});

// GET actions by project id.
router.get('/:id/actions', validateId, (req, res) => {
    const id = req.params.id;

    projects.getProjectActions(id)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to delete actions' });
        });
})

// DELETE
router.delete('/:id', validateId, (req, res) => {
    const id = req.params.id;

    projects.remove(id)
        .then(removedItem => {
            res.status(200).json(removedItem);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to delete project' });
        })
});

// POST 
/*  { "name": "Project Name", "description": "New Project description" } */
router.post('/', (req, res) => {
    const newProject = req.body;

    projects.insert(newProject)
        .then(projectAdded => {
            res.status(200).json(projectAdded);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to add project' });
        })
});

//PUT 
// { "name": "New Project Name", "description": "Updated Project description" }
router.put('/:id', validateId, (req, res) => {
    const updates = req.body;
    const id = req.params.id;

    projects.update(id, updates)
        .then(updatedProject => {
            res.status(200).json(updatedProject);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to add project' });
        })
})

// Custom middlewar
function validateId(req, res, next) {
    const id = req.params.id;

    projects.get(id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: 'No such project exists with that id.' });
            } else {
                next();
            }
        })
}

module.exports = router;