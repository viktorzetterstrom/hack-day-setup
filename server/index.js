const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.purge('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.get('/testing', (req, res) => {
  res.send('hej');
});

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
