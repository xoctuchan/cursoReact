const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors())

//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, ()=>{
    //console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})