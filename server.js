const express = require('express');
const { PORT } = require('./app.config');

const app = express();
const port = PORT || 3000;

app.use(express.json());

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'ejs');
//render css files
app.use(express.static("public"));

// import modules
const medicineModule = require('./medicines/medicines.routes');

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
})

app.get('/', (req, res) => {
  res.render("home");
})

app.use('/medicines', medicineModule);
