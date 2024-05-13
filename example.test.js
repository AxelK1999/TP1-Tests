const {example, inicioSesiónCVUGD} = require('./index');

test('Titulo de busqueda es igual a Google', async() => {
    expect(await example()).toBe("Google");
},10000);

test('Prueba de inicio de secion con credenciales validos', async()=>{
    expect(await inicioSesiónCVUGD()).toBe("CAMPUS VIRTUAL UGD");
},10000000);

