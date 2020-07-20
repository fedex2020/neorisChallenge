Pasos para correr el proyecto

- ejecutar npm run install-app
- ejecutar npm run app

Si se desea trabajar con otra base mongo la direccion de la conexion se puede modificar en el archivo ./server/config/dev.config

Pasos para cargar los feriados en la base de datos

- tener instaladas las dependencias previamente
- ejecutar npm run start-server
- hacer un post a la url localhost:3001/feriados/popular
