const app = require('express')();

// Home
app.get('/', (req, res)=>{
    res.status(200).send({message: 'hello world'});
});

module.exports = app;