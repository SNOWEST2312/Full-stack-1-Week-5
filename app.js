import express from 'express';
const app = express();
app.listen(3000, ()=>console.log('listening on 3000'));

// There's an easier way to send files... using Middleware!
//Express has a built-in middleware for this.
app.use(express.static('public-files')); // takes a folder location
// where the files are stored.
// The above middleware does NOT include public-files
// folder name in the path of the URL. 

// We need to use ANOTHER built-in middleware to decode
// the form data before we can access it.
app.use(express.urlencoded({ extended: true}));

// Create a function that will handle the form submission.
// receive a POST request, and send a response.
app.post('/registration', (req, res)=>{
    // handle the request here.
    res.send(req.body);
    // req.body contains the HTTP request body, which contains
    // the form data
});