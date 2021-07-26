const express = require('express');
const router = express.Router();
const tutores = require('../db/tutores')

router.get('/', (req,res) => {
  res.render('profile', { tutor: tutores[0] })
})

module.exports = router;