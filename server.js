const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('APP in Running!');
})

app.get('/', (req, res) => {
  res.send('APP is Running!');
})

