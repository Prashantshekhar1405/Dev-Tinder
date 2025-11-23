const express = require('express');

const app = express();


// request handler
app.use('/test' , (req, res) => {
    res.send('hello , how are you');
})

app.use('/home', (req, res) => {
    res.send('hello from the server');
})
app.listen(3000 , () => {
    console.log('server has created sussessfully');
});
// listen(port number);
