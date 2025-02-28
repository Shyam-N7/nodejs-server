const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('^/$x|/index(.html)?', (req, res) => {       //This is called regular expression, it means that whether '/' or '/index.html' or '/index' is present, render that file
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))