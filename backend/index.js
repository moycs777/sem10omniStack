const express = require('express');

const app = express();

app.use(express.json() );

app.get('/', (req, res) => {
    return res.json({'message': 'hello omnistack'});
    // return res.send('hello world');
})

app.listen(3333);