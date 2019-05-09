const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello, World - from the backend container');
});

const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  console.log(`Server listening on port ${port}`);
});
