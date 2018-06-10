const express = require('express');

// instantiate a new express server
const app = express();

// define what port to listen on
const PORT = 8080;

app.get('/healthcheck', (req, res) => {
    res.status(200).json({message: 'success'});
}); 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});