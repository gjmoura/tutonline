const express = require('express');
const profileRouter =require('./routes/profile');
const app = express();

app.set('view engine', 'ejs');

app.use('/profile', profileRouter);

app.get('/', (req,res) => {
  const competencias = ['Eletrônica', 'Programação', 'Engenharia de Software', 'Design']
  res.render('index', { competencias:  competencias})
})

app.listen(5000);