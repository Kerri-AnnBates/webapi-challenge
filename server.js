const express = require('express');
const cors = require('cors');
const projectRoutes = require('./api/projects-route');
const actionRoutes = require('./api/actions-route');
const server = express();

server.use(express.json());
server.use(cors());
server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);


server.get('/', (req, res) => {
    res.send('Hello Kerri-Ann');
});

module.exports = server;