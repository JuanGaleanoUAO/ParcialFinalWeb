const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./database/config')
const cors = require('cors')
const Server = require('./Server/server');

const myServer = new Server();
myServer.listen();

// Crear Express App
const app = express();

//Base de datos
dbConnection();

app.use( express.static('public'))

//Cors

app.use( cors() )

app.use(express.static('publish'))

//Lectura y parseo del body
app.use(express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/task', require('./routes/task'))

//Escuchar en puerto 4000

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT)
})