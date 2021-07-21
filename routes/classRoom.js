const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('classRoom')
})

module.exports = router;