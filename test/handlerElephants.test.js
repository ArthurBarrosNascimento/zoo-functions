const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa quantidade de elefantes', () => {
    const expected = 4;
    const result = handlerElephants('count');

    expect(result).toBe(expected);
  });

  it('Retorna Array com nomes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const result = handlerElephants('names');

    expect(result).toEqual(expected);
  });

  it('Retona a media de idade dos elefantes', () => {
    const expected = 10.5;
    const result = handlerElephants('averageAge');

    expect(result).toBe(expected);
  });

  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    const result = handlerElephants('location');
    const expected = 'NW';
    expect(result).toEqual(expected);
  });

  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const availability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(availability);
  });

  it('Se não receber nenhum parâmetro deve retornar undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('Caso o parâmetro não for uma string, deve retornar mensagem de erro', () => {
    expect(handlerElephants(123)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Deve retornar null caso seja um paremetro diferente', () => {
    expect(handlerElephants('direfente')).toEqual(null);
  });
});
