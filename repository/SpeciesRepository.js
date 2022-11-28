const knex = require('../db/connection');

 const speciesRepository = {
    //Obtiene todas las especies de la base de datos
    async getAll() {
        try {
            console.log("Llegó Repo");
            const queryBuilder = knex
                .select('nombre', 'clasificacion', 'tipo', 'estatura_promedio', 'tiempo_de_vida', 'color_ojos', 'color_cabello', 'color_piel', 'lenguaje', 'planeta')
                .from('especies');
            const rows = await queryBuilder;
            return rows;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    //Guarda una especie en la base de datos
    async save(data) {
        try {
            await knex.insert(data)
                .insert(data)
                .into('especies');
            return data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

}

module.exports = speciesRepository;