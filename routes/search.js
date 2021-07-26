const express = require('express');
const router = express.Router();
const tutores  = require('../db/tutores');

const competencias = ['Eletrônica', 'Programação', 'Engenharia', 'Design'];

router.get('/', (req,res) => {
  res.render('search', { competencias:  competencias, tutores: tutores});
})

module.exports = router;