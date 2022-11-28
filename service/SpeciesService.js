const fetch = require('node-fetch');
const { SpeciesDTO } = require('../dto/SpeciesDTO');
const speciesSchema = require('../schema/Species');
const speciesRepository = require('../repository/SpeciesRepository');

let speciesService = {
   //Devuelve todas las especies
    getAll: async function () {
        try {
            const response = await fetch('https://swapi.py4e.com/api/species/');
            console.log("aquí", JSON.stringify(response));
            if (response.ok) {
                const jsonResponse = await response.json();
                let { results } = jsonResponse;
                const speciesFromDatabase = await speciesRepository.getAll();
                const speciesFromSwapi = results.map(s => new SpeciesDTO(s))
                const species = speciesFromDatabase.concat(speciesFromSwapi);
                return species;
            }
            return Promise.reject(new Error('Ha ocurrido un error'));
        } catch (error) {
            return Promise.reject(error);
        }
    },
    //Guarda una especie
    save: async function (speciesSaveDTO) {
        try {
            const validated = await speciesSchema.validateAsync(speciesSaveDTO);
            const species = await speciesRepository.save(validated);
            return species;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

module.exports = speciesService;