const express = require('express');
const router = express.Router();
const Tutor = require('../classes/Tutor')
const Sala = require('../classes/Sala')

const tutor = new Tutor("Gustavo", "gustavo@gmail.com", "Programação", "Dev", "password");
tutor.setSalasCriadas('Desenvolvimento Web','Programação', 'Sala para programação Web', 'Rocketseat')
console.log(tutor.getTutor())

const competencias = ['Eletrônica', 'Programação', 'Engenharia', 'Design']

router.get('/', (req,res) => {
  res.render('search', { competencias:  competencias, tutor: tutor})
})

module.exports = router;