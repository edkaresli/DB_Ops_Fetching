const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {

  res.json({ "msg" : "All is working!" });

});

app.listen(6000, () => {

  console.log('Server is listening on port 6000...');

});