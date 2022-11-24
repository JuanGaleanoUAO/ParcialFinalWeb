const mongoose = require('mongoose');
const {Schema, model} = require('mongoose')

const TaskScheme = Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});

module.exports = model('Task', TaskScheme);

const dbConnection = async() => {
    try {
        mongoose.connect( process.env.DB_CONNECTION, {
            autoIndex: true
        })

        console.log('DB online')
    } catch(error) {
        console.log(error)
        throw new Error('Error al conectar en DB')
    }
}

module.exports = {dbConnection}