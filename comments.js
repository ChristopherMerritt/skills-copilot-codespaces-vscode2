// create web app
const express = require('express');
const app = express();
// create json parser
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
// create port
const port = 3000;
// create comments array
const comments = [
  { username: 'Todd', comment: 'This is a comment!' },
  { username: 'Sue', comment: 'This is another comment!' }
];
// create get method
app.get('/comments', (req, res) => {
  res.json(comments);
});
// create post method
app.post('/comments', jsonParser, (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});
// listen to port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
