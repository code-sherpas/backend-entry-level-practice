const toKlingon = require('./toKlingon');

test('hola', () => {
  expect(toKlingon("hola")).toBe("nuqneH");
});

test('adiós', () => {
  expect(toKlingon("adiós")).toBe("maj");
});

test('coche' , () => {
  expect(toKlingon("coche")).toBe("puH Duj");
});
