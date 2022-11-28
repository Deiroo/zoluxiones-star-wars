# zoluxiones-star-wars

## Base de datos

En el folder db está presente el script de creación de la tabla 'especies'
```sql
CREATE TABLE `especies` (
  `nombre` VARCHAR(64) NOT NULL,
  `clasificacion` VARCHAR(64) NULL,
  `tipo` VARCHAR(64) NULL,
  `estatura_promedio` VARCHAR(64) NULL,
  `tiempo_de_vida` VARCHAR(64) NULL,
  `color_ojos` VARCHAR(64) NULL,
  `color_cabello` VARCHAR(64) NULL,
  `color_piel` VARCHAR(64) NULL,
  `lenguaje` VARCHAR(64) NULL,
  `planeta` VARCHAR(64) NULL);
  ```

## Ejecución en localhost

```
> npm install
> serverless offline
```

## Despliegue con comando

Para realizar el despliegue se tiene que tener lo siguiente:
```
> Node.js
> AWS CLI
> Configuración de AWS CLI con las claves de acceso

```
Luego de haber preparado lo anterior se debe ejecutar el siguiente comando
```
> serverless deploy
```