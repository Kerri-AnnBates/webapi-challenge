const express = require('express');
const router = express();

const projects = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    projects.get()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'Unable to retrieve projects' });
        })
});

module.exports = router;