
const User = require('../models/User');

const login = (req,res) => {
    // return res.status(200).json({
    //     status: "success",
    //     mensaje: "Login"
    // });
    return res.render('login', {})
}

const register = (req,res) => {
    // return res.status(200).json({
    //     status: "success",
    //     mensaje: "Login"
    // });
    return res.render('register', {})
}


module.exports = {
    login,
    register
}