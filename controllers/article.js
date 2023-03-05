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

const create = (req,res) => {
    res.render('articles/create', {
        title: "create",
    })
}

const save = (req,res) => {
    let parameters = req.body;
    const article = new Article(parameters);

    article.save((error,article) => {
        if(error || !article) {
            return res.status(404).json({
                status: "error",
                mensaje: "Couldn't save article"
            })
        }

        return res.status(200).json({
            status: "succes",
            article,
            message: "Article saved"
        })
    });
}

module.exports = {
    policy,
    sports,
    curious,
    article,
    create,
    save
}