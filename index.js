const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  return res.json({
    route: '/',
    message: 'Automatically deployed via webhooks and jenkins integration',
  });
});

app.listen(3000, (err) => {
  if (err) return 'Some error';
  console.log('server startted listening on port 3000');
});
