const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./app.config');

const app = express();
const port = PORT || 3000;

// import modules
const medicineModule = require('./medicines/medicines.routes');

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
})

app.get('/', (req, res) => {
  res.send('App is Running!');
})

app.use(bodyParser.urlencoded({extended: false}));

app.use('/medicines', medicineModule);
