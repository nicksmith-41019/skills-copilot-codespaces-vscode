// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('POST /comments');
});

app.put('/comments/:id', (req, res) => {
  console.log(req.body);
  res.send('PUT /comments/:id');
});

app.delete('/comments/:id', (req, res) => {
  res.send('DELETE /comments/:id');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
// END