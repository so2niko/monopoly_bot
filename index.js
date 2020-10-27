const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
    res.send('Hello, I am a BOT');
    
});

app.listen(5000);
