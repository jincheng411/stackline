const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 3000;
const product = require('./dist/assets/product.json')

app.use(express.json());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, './dist')));

app.get('/api/products/:id', (req, res) => {
  res.json(product[0])
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('listening on port: ' + port)
  }
})