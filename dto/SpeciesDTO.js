
class SpeciesDTO{
    constructor(specie){
        this.nombre = specie.name;
        this.clasificacion = specie.classification;
        this.tipo = specie.designation;
        this.estatura_promedio = specie.average_height;
        this.tiempo_de_vida = specie.average_lifespan;
        this.color_ojos = specie.eye_colors;
        this.color_cabello = specie.hair_colors;
        this.color_piel = specie.skin_colors;
        this.lenguaje = specie.language;
        this.planeta = specie.homeworld;
    }
}

module.exports = {
    SpeciesDTO
}