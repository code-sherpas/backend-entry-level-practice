const toKinglon = require('./toKinglon');

test('hola', () => {
  expect(toKinglon("hola")).toBe("nuqneH");
});

test('adiós', () => {
  expect(toKinglon("adiós")).toBe("maj");
});