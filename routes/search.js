const express = require('express');
const router = express.Router();
const Tutor = require('../classes/Tutor');
const Sala = require('../classes/Sala');

const tutores = []

tutores.push(new Tutor("Gustavo", "gustavo@gmail.com", "Programação", "Dev", "password"));
tutores[0].setSalasCriadas('Desenvolvimento Web','Programação', 'Sala para programação Web', 'Rocketseat');
tutores.push(new Tutor("Adson", "adson@gmail.com", "Eletrônica", "Doutor", "password"));
tutores[1].setSalasCriadas('Diodos','Eletrônica', 'Sala de Eletrônica', 'BOYSLTAD');
tutores.push(new Tutor("Maria Jamilli", "mariajamilli@gmail.com", "Programação", "Doutora", "password"));
tutores[2].setSalasCriadas('Data Science','Programação', 'Sala para Data Science', 'Data Science');
tutores.push(new Tutor("Caio Matheus", "mariajamilli@gmail.com", "Matemática", "Doutora", "password"));
tutores[3].setSalasCriadas('Cálculo','caio', 'Sala para Cálculo', 'Professor Vital');
tutores.push(new Tutor("Caio Matheus", "caio@gmail.com", "Matemática", "Doutora", "password"));
tutores[4].setSalasCriadas('Cálculo','Matemática', 'Sala para Cálculo', 'Professor Vital');
tutores.push(new Tutor("Caio Matheus", "caio@gmail.com", "Matemática", "Doutora", "password"));
tutores[5].setSalasCriadas('Cálculo','Matemática', 'Sala para Cálculo', 'Professor Vital');

console.log(tutores);

const competencias = ['Eletrônica', 'Programação', 'Engenharia', 'Design'];

router.get('/', (req,res) => {
  res.render('search', { competencias:  competencias, tutores: tutores});
})

module.exports = router;