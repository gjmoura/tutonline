const express = require('express');
const router = express.Router();

const tutores = require('../db/tutores')

router.get('/', (req,res) => {
  res.render('classRoom', {tutor: tutores[0]});
})

console.log(tutores[0])
module.exports = router;