

## Descripción (Ticket JIRA)

Crear una función o servicio que recibiendo un id de beca, un role y un periodo genere un código/token que contenga esta información.

El código será la combinación de [scholarship_id].[role_code].[periodo] codificado de alguna manera ver ejemplo JWT.IO

El mismo servicio debe ser capaz de decodificar el token devolviendo un objeto del tipo:

```
{
    "scholarship_id": 432,
    "role_code": "edu",
    "period": "inicial"
}
```

## ¿Qué se ha modificado?

Se ha creado una función que a partir de uno valores genera un token, y luego es capaz de decodificar el token y devolver un JSON.

## Tipo de acción
- [ ] Error
- [ ] Modificación 
- [x] Novedad

## Pasos para reproducir o probar

Ejecutar los tests creados:
```
nouscims-test Unit/Scholarships/SurveyTokenTest.php
```

## Comentarios adicionales
