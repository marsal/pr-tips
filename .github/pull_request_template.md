## Título de la pull request

Por favor, utiliza el siguiente formato para el título de la pull request:

<tipo>[opcional alcance]: [PROYECTO-1234] <descripción breve>

[opcional cuerpo]

[opcional pie de página]

Donde:

- `[PROYECTO-1234]` es el número del problema o tarea de Jira relacionado con la pull request.
- `<tipo>` es uno de los tipos definidos en Conventional Commits, como "feat" para nuevas características, "fix" para correcciones de errores o "docs" para cambios en la documentación.
- `[alcance]` es una descripción del alcance de los cambios realizados en la pull request.
- `<descripción breve>` es una descripción breve y concisa de los cambios realizados en la pull request.

Ejemplo: [PROYECTO-1234] feat(users): agregar campo de fecha de nacimiento en formulario de registro

## Cambios realizados
- [ ] Agregué una nueva función que permite a los usuarios enviar correos electrónicos automáticamente.
- [ ] Modifiqué la interfaz de usuario para mejorar la experiencia del usuario.
- [ ] Corregí un error en la validación de los campos de entrada.

## Contexto
Este pull request resuelve el problema [PROJ-1234](https://example-jira.com/browse/PROJ-1234). El objetivo es agregar una nueva funcionalidad que permita a los usuarios enviar correos electrónicos automáticamente.

## ¿Cómo se probó este cambio?
Se probaron los siguientes casos de prueba:
- Caso de prueba 1: Se envió un correo electrónico con éxito.
- Caso de prueba 2: Se intentó enviar un correo electrónico sin completar todos los campos requeridos.

## Comentarios adicionales
Cualquier comentario o sugerencia sobre estos cambios es bienvenido. Por favor, asegúrese de vincular cualquier problema de Jira relacionado con este pull request. Gracias por revisar este pull request.
