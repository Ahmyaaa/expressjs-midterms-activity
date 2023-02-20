//1. Installing Express
//2. Installing libraries/ dependencies
//3. Require statements\\

const express = require('express');
const app = express();

//4. use the middleware required for serving static files

app.use(express.static('public'));

//create the route to serve a static index.html

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

//Setting the listener to ENV PORT info
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
