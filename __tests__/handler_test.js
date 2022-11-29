const handler = require('../handlers/species');
const { SpeciesSaveDTO } = require('../dto/SpeciesSaveDTO');

const mockSpecies = {
    "nombre": "Ewok5",
    "clasificacion": "Viviente",
    "tipo": "Sensible",
    "estatura_promedio": "n/a",
    "tiempo_de_vida": "n/a",
    "color_ojos": "n/a",
    "color_cabello": "n/a",
    "color_piel": "n/a",
    "lenguaje": "n/a",
    "planeta": "n/a"
}

test('Obtener código 200 al obtener lista de especies', async () => {
    const data = await handler.list();
    expect(data.statusCode).toBe(200);
});

test('Obtener una lista con contenido', async () => {
    const data = await handler.list();
    expect(data.body).not.toBeNull();
});

test('Guardar una especie en BD', async () => {
    const event = { body: JSON.stringify(mockSpecies) };
    const data = await handler.save(event);
    expect(data.statusCode).toBe(201);
    expect(data.body).not.toBeNull();
});

