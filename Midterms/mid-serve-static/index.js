const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/' + 'blog.html');
});
sad;
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/' + 'about.html');
});

app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'upload.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/' + 'contact.html');
});

app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
