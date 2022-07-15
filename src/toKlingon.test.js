const toKlingon = require('./toKlingon');

test('hola', () => {
  expect(toKlingon("hola")).toBe("nuqneH");
});

test('adiós', () => {
  expect(toKlingon("adiós")).toBe("maj");
});

test('personas', () => {
  expect(toKlingon("personas")).toBe("nuv");
});