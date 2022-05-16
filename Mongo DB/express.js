const express = require('express');

const app=  express();

app.get('/user', (req,res) =>{
    res.send('GET User');
})

app.post('/user', (req,res) =>{
    res.send('POST User');
})

app.put('/user', (req,res) =>{
    res.send('PUT User');
})

app.delete('/user', (req,res) =>{
    res.send('DELETE User');
})

app.listen(3000, () =>console.log('Hello Word Server ver 1.0.0 instalado'));