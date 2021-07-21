const express = require('express');
const router = express.Router();

const competencias = ['Eletrônica', 'Programação', 'Engenharia de Software', 'Design']

router.get('/', (req,res) => {
  res.render('search', { competencias:  competencias})
})

module.exports = router;