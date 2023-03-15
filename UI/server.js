const express = require('express');

const app = express();


app.use(express.static('public'));

const port = 8000;
app.listen(port, function () {
    console.log("UI Started on port " + port);
})