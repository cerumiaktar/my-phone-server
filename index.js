const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) =>{
    res.send('my phone information is coming soon')
})

app.listen(port, () =>{
    console.log(`My phone server is running on port: ${port}`);
})