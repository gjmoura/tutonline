const Tutor = require('../classes/Tutor');
const Sala = require('../classes/Sala');

const tutores = []

tutores.push(new Tutor("Eduardo Falcão", "eduardofalcao@gmail.com", ["Engenharia de Software", "SCRUM", "Programação", "Java", "Python"], "Professor na UFRN", "password"));
tutores[0].setSalasCriadas('Projeto e Engenharia de Software','Engenharia de Software', 'Projeto e Engenharia de Software', ['Ian Somerville', 'https://iansommerville.com/', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51DEVBCB7TL._SX218_BO1%2C204%2C203%2C200_QL40_.jpg&f=1&nofb=1']);
tutores[0].salasCriadas[0].updateMateriais(["Engenharia de Software Moderna", "https://engsoftmoderna.info/", "https://engsoftmoderna.info/figs/capa/foto-capa-papel3.png"]);
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

module.exports = tutores;