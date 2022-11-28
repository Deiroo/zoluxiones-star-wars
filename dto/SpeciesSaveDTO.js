
class SpeciesSaveDTO{
    constructor(requestBody){
        this.nombre = requestBody.nombre;
        this.clasificacion = requestBody.clasificacion;
        this.tipo = requestBody.tipo;
        this.estatura_promedio = requestBody.estatura_promedio;
        this.tiempo_de_vida = requestBody.tiempo_de_vida;
        this.color_ojos = requestBody.color_ojos;
        this.color_cabello = requestBody.color_cabello;
        this.color_piel = requestBody.color_piel;
        this.lenguaje = requestBody.lenguaje;
        this.planeta = requestBody.planeta;
    }
}

module.exports = {
    SpeciesSaveDTO
}