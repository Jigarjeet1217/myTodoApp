const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  return res.json({
    route: '/',
    message: 'This is welcome message',
  });
});

app.listen(3000, (err) => {
  if (err) return 'Some error';
  console.log('server startted listening on port 3000');
});
