const Article = require('../models/Article');


const policy = (req,res) => {
    return res.render('news', {
        title: "Policy",
        page: "Policy"
    })
}

const sports = (req,res) => {
    return res.render('news', {
        title: "Sports",
        page: "Sports"
    })
}

const curious = (req,res) => {
    res.render('news', {
        title: "Curious",
        page: "Curious"
    })
}

const article = (req,res) => {
    res.render('article', {
        title: "New Title",
    })
}

module.exports = {
    policy,
    sports,
    curious,
    article
}