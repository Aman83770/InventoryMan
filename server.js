const express = require('express');
const { PORT } = require('./app.config');

const app = express();
const port = PORT || 3000;

app.use(express.json());

// import modules
const medicineModule = require('./medicines/medicines.routes');

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
})

app.get('/', (req, res) => {
  res.send('App is Running!');
})

app.use('/medicines', medicineModule);
