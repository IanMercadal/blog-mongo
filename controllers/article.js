const Article = require('../models/Article');


const policy = (req,res) => {
    return res.render('articles/articles', {
        title: "Policy",
        page: "Policy"
    })
}

const sports = (req,res) => {
    return res.render('articles/articles', {
        title: "Sports",
        page: "Sports"
    })
}

const curious = (req,res) => {
    res.render('articles/articles', {
        title: "Curious",
        page: "Curious"
    })
}

const article = (req,res) => {
    res.render('articles/article', {
        title: "New Title",
    })
}

module.exports = {
    policy,
    sports,
    curious,
    article
}