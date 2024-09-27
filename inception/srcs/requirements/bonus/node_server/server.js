const express = require('express');
const app = express();
const port = 1337;

app.use(express.static('public'));

// Fichiers CSS
app.use('/css', express.static(__dirname + '/public/css', {
  'extensions': ['css'],
  'index': false,
  'setHeaders': (res) => res.type('text/css')
}));

// Fichiers JS
app.use('/js', express.static(__dirname + '/public/js', {
  'extensions': ['js'],
  'index': false,
  'setHeaders': (res) => res.type('text/javascript')
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/homepage.html');
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port ${port}.`);
});
