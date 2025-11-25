const express = require('express');

const app = express();


// request handler
app.use('/test' , (req, res) => {
    res.send('hello , how are you');
})
// doing app.use will match all the http method api calls to /home/users 
app.use('/home', (req, res) => {
    res.send('hello from the server');
})
app.use('/user' , (req , res) => {
    res.send("this is before all requset which will match all requset made on this url , because order matters ")
})

// but this route (app.get) will match the GET API  call 
app.get('/user' , (req , res) => {
    res.send({name : 'prashant' , lastname : 'shekhar'});
});

app.post('/user', (req , res) => {
    res.send("Data successfully saved to the database!");
})

app.delete('/user' , (req , res) => {
    res.send("deleted the data successfully from the database");
})
app.listen(3000 , () => {
    console.log('server has created sussessfully');
});
// listen(port number);
