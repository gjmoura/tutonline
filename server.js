const express = require('express');
const profileRouter =require('./routes/profile');
const classRoom =require('./routes/classRoom');
const search =require('./routes/search');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use('/', search);

app.use('/profile', profileRouter);

app.use('/class', classRoom);

app.listen(5000);