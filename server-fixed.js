const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 5000);
  });
  promise.then((result) => {
    res.send(result);
  }).catch(error => {
    console.error("Error:", error);
    res.status(500).send("Error processing request");
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});