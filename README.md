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

## Despliegue con comando

Para ejecutar las pruebas unitarias se debe ejecutar el comando

```
> npm test
> PASS  __tests__/handler_test.js
  √ Obtener código 200 al obtener lista de especies (109 ms)
  √ Obtener una lista con contenido (25 ms)
  √ Guardar una especie en BD (58 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.216 s, estimated 2 s
Ran all test suites.
```