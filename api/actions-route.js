const express = require('express');
const router = express();

const actions = require('../data/helpers/actionModel');

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
})

// Custom middlewar
function validateId(req, res, next) {
    const id = req.params.id;

    actions.get(id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: 'No such action exists' });
            } else {
                next();
            }
        })
}


module.exports = router;