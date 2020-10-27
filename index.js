const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, I am a BOT');
});

app.listen(80);
