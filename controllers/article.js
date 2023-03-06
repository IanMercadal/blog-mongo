const Article = require('../models/Article');

const category = (req,res) => {

    let parameters = req.params.category;
    // Llamar a funcion de busqueda
    try {
        Article.find({"$or": [
            {"category": {"$regex": parameters, "$options": "i"}},
        ]})
        .sort({fecha: -1})
        .exec((error, articlesFound) => {
            if(error || !articlesFound || articlesFound.length <= 0) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "No se han encontrado artículos"
                })
            }
    
            return res.render('articles/articles', {
                status: "success",
                title: "Policy",
                articles: articlesFound
            })
        })
    } catch (error) {
        return res.status(404).json({
            status: "error",
            mensaje: "No se encuentran los datos"
        })
    }
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
    category,
    article,
    create,
    save
}