import express from 'express';
const app = express();
app.listen(3000, () => console.log('listening on 3000'));

// There's an easier way to send files... using Middleware!
//Express has a built-in middleware for this.
app.use(express.static('public-files')); // takes a folder location
// where the files are stored.
// The above middleware does NOT include public-files
// folder name in the path of the URL.

// We need to use ANOTHER built-in middleware to decode
// the form data before we can access it.
app.use(express.urlencoded({ extended: true }));

// Create a function that will handle the form submission.
// receive a POST request, and send a response.

// req.body contains the HTTP request body, which contains
// the form data
// a from sent as a GET request encodes the data where? in the URL. Not very secure
// a forms sends as a POST request encodes the form data in the body of the request, which is encrypted
// Handle the request
// Validation:make sure the student number exists and has exactly 4 digits

const validation = (req, res, next) => {
  // Create a error object that will follow the response object\
  res.local.errorMessage = '';
  if (req.body.studentName > 9999 || req.body.studentName < 1000) {
    res.local.errorMessage += 'student number must be less than 9999 or grater than 1000';
    // error
  }
  // fine
  next();
};

app.post('/registration', [validation], (req, res) => {
  if (res.locals.errorMessage == '') {
    // 200 => success
    res.status(200).send('<p>Student with name ${req, body.lastName} has resgistered <p/>');
  } else {
    // Unproceessable Entity: often used for bad form data,validation error
    res.status(422).json(res.locals.errorMessage);
  }
});
// Note: to display the error messages on the same pages as a form, use templates(view )
