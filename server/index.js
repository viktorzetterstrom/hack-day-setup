const express = require('express');
const app = express();
const port = 8080;


app.get('/testing', (req, res) => {

  res.send('hej');
});

app.listen(port);
