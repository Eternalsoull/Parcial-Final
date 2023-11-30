//Crear un servidor básico de Express
const express = require('express');

const app = express();
const routerApi = require('./routes')
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const PORT = process.env.PORT || 3000; //
const APP_NAME = process.env.APP_NAME || "My App"; 


//Permitir tráfico en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json())



//Definir las rutas de la aplicación
routerApi(app);

//Iniciar el servidor
app.listen(
    PORT,
    () => console.log(`${APP_NAME} is running on http://localhost:${PORT}`) //sirve para ver en que puerto esta corriendo el servidor
  );