'use strict';
const { SpeciesSaveDTO } = require('../dto/SpeciesSaveDTO');
const speciesService = require('../service/SpeciesService');

module.exports.list = async (event) => {
  try {
    const result = await speciesService.getAll();
    const response = {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          message: "Esta es la lista de especies",
          result,
        },
        null,
        2
      ),
    };
    return response;
  } catch (error){
    return JSON.stringify(error);
  }
};

module.exports.save = async (event) => {
  try {
    const { body } = event;
    console.log(JSON.stringify(event))
    const jsonData = JSON.parse(body);
    const dto = new SpeciesSaveDTO(jsonData);
    const result = await speciesService.save(dto);
    const response = {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          message: "Se guardó la especie",
          result
        },
        null,
        2
      ),
    };
    return response;
  } catch (error) {
    return JSON.stringify(error);
  }
};