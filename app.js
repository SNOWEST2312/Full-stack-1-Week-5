import express from 'express';
const app = express();
app.listen(3000, () => console.log('listening on 3000'));

app.use(express.static('public-files'));

// we need to use ANOTHER built-n middleware to decode
// the from data before we can acces it

app.use(express.urlencoded({ extended: true }));

// create a function that handlle the form submission
// recieve a post request, and send a response

app.post('/registration', (req, res) => {
  // hadel the request here
  res.send(req.body);
});
