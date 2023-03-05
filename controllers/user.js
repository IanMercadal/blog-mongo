
const User = require('../models/User');

const login = (req,res) => {
    return res.render('user/login', {})
}

const register = (req,res) => {
    return res.render('user/register', {})
}


module.exports = {
    login,
    register
}