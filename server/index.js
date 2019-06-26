const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/users', db.getUsers);
app.get('/api/users/:id', db.getUserById);
app.post('/api/users', db.createUser);
app.put('/api/users/:id', db.updateUser);
app.delete('/api/users/:id', db.deleteUser);

app.listen(port);
