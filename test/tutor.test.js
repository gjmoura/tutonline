const Tutor = require('../classes/Tutor');

const tutor = new Tutor("Tutor Teste", "tutor@gmail.com", ["Tutor", "Programação", "Eletrônica"], "Professor", "password")

test('Verifica a criação de um tutor', () => {
  expect(tutor).not.toBeUndefined();
  expect(tutor.nome).toBe("Tutor Teste");
});

test('Verifica a criação de uma sala por um tutor', () => {
  tutor.setSalasCriadas("Sala Tutor Teste", tutor.competencias, "Sala para teste de criação", ["Link Externo","Teste para"]);

  expect(tutor.getSalasCriadas()).not.toBeUndefined();
  expect(tutor.salasCriadas[0].nome).toBe("Sala Tutor Teste");
});

test('Verifica uma avaliação feita ao tutor', () => {
  expect(tutor.getAvaliacao()).toBe("Nenhuma avaliação");
  tutor.setAvaliacao(5);
  expect(tutor.getAvaliacao()).toBe("5 de 5");
});
