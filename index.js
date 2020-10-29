const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    // res.writeHead(200, {
    //     "Content-Type": "text/html; charset=utf-8",
    //   });
    res.end('<h2>Hello, I am a BOT</h2>'); 
});

app.get('/about', (req, res) => {
  res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
  res.end('<h2>About bot</h2>'); 
});

app.listen(PORT, 
    () => console.log('Server has been started'));
