const toKlingon = require('./toKlingon');

test('hola', () => {
  expect(toKlingon("hola")).toBe("nuqneH");
});

test('adiós', () => {
  expect(toKlingon("adiós")).toBe("maj");
});

test('casa', () => {
  expect(toKlingon("casa")).toBe("juH qach");
});

test('porche', () => {
  expect(toKlingon("porche")).toBe("tor");

});

test('calabaza', () => {
  expect(toKlingon("calabaza")).toBe("dIr");
});