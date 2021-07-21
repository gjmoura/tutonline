const express = require('express');
const router = express.Router();
const Tutorando = require('../classes/Tutorando')

const tutorando = new Tutorando("Gustavo", "gustavo@gmail.com", "competencias", "profissao", "senha");

const competencias = ['Eletrônica', 'Programação', 'Engenharia', 'Design']

router.get('/', (req,res) => {
  res.render('search', { competencias:  competencias, tutorando: tutorando})
})

module.exports = router;