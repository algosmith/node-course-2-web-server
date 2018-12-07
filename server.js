const express = require ('express');

var app = express();

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express</h1>');
    res.send({
        name : 'Andrew',
        likes :['Biking', 'Cities']
    });
});

app.get('/about%20us', (req,res) => {
    res.send({
       heading : 'About Us page',
       title : '<h1> Hello My name Is Raushan</h1>',
       body : '<p> Sure </p>'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage : 'Unable to handle request'
    });
});

app.listen(3000);
