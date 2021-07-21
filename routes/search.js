const express = require('express');
const router = express.Router();
const Tutor = require('../classes/Tutorando')

const tutor = new Tutor("Gustavo", "gustavo@gmail.com", "Programação", "Dev", "password");

const competencias = ['Eletrônica', 'Programação', 'Engenharia', 'Design']

router.get('/', (req,res) => {
  res.render('search', { competencias:  competencias, tutor: tutor})
})

module.exports = router;