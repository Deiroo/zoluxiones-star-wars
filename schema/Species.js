const Joi = require('joi');

const speciesSchema = Joi.object({
    nombre: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar el nombre',
            'string.base': 'Debe ingresar el nombre como string. Ejemplo: "Wookiee"'
        }),
    clasificacion: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar la clasificación',
            'string.base': 'Debe ingresar la clasificación como string. Ejemplo: "Se"'
        }),
    tipo: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar el tipo',
            'string.base': 'Debe ingresar el tipo como string. Ejemplo: "Anakin"'
        }),
    estatura_promedio: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar la estatura promedio',
            'string.base': 'Debe ingresar la estatura promedio como string. Ejemplo: "1.72"'
        }),
    tiempo_de_vida: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar el tiempo de vida',
            'string.base': 'Debe ingresar el tiempo de vida como string. Ejemplo: "25 años"'
        }),
    color_ojos: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar un color de ojos',
            'string.base': 'Debe ingresar un color de ojos como string. Ejemplo: "blue"'
        }),
    color_cabello: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar el color de cabello',
            'string.base': 'Debe ingresar el color de cabello como string. Ejemplo: "blonde"'
        }),
    color_piel: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar el color de piel',
            'string.base': 'Debe ingresar el color de piel como string. Ejemplo: "green"'
        }),
    lenguaje: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar un genero',
            'string.base': 'Debe ingresar un genero como string. Ejemplo: "male"'
        }),
    planeta: Joi.string()
        .required()
        .messages({
            'any.required': 'Debe ingresar un planeta',
            'string.base': 'Debe ingresar un planeta como string del URL. Ejemplo: "https://swapi.py4e.com/api/planets/14/"'
        })
});

module.exports = speciesSchema;