const {Schema, model} = require('mongoose');

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        default: 'customer',
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = model("User", UsersSchema);