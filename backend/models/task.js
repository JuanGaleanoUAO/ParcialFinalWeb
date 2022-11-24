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

TaskScheme.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = id;
    return object;
})

module.exports = model('Task', TaskScheme);