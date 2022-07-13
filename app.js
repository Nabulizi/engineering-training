const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to My Homepage')
})

app.listen(port, () => {
  console.log(`My app is listening on port ${port}`)
})