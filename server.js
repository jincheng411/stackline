const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, './dist')));

app.get('/', (req, res) => {
  res.send('hello, world')
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('listening on port: ' + port)
  }
})