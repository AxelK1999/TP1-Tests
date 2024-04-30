const example = require('./index');

test('Titulo de busqueda es igual a Google', async() => {
    expect(await example()).toBe("Google");
});