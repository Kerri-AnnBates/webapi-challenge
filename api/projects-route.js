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

// DELETE
router.delete('/:id', validateId, (req, res) => {
    const id = req.params.id;

    projects.remove()
        .then(removedItem => {
            res.status(200).json(removedItem);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to delete project' });
        })
});

// Custom middlewar
function validateId(req, res, next) {
    const id = req.params.id;

    projects.get(id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: 'No such project exists' });
            } else {
                next();
            }
        })
}

module.exports = router;