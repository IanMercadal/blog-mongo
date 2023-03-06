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
                title: parameters,
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
    let articleId = req.params.id;

    try {
        Article.findById(articleId)
        .exec((error, articleFound) => {
            if(error || !articleFound || articleFound.length <= 0) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "No se han encontrado artículos"
                })
            }
        
            console.log("-----------------");
            console.log(articleFound);
    
            return res.render('articles/article', {
                status: "success",
                article: articleFound
            })
        })

    } catch (error) {
        return res.status(404).json({
            status: "error",
            mensaje: "No se encuentran los datos"
        })
    }

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

const edit = (req,res) => {
    let articleId = req.params.id;

    Article.findOneAndUpdate({ _id: articleId }, req.body, { new: true }, (error, articleUpdated) => {

        if (error || !articleUpdated) {
            return res.status(500).json({
                status: "error",
                mensaje: "Error al editar"
            })
        };

        return res.status(200).json({
            status: "success",
            article: articleUpdated
        })
    });
}

const remove = (req,res) => {
    let articleId = req.params.id;

    Article.findOneAndDelete({ _id: articleId }, (error, articleDeleted) => {
        if(error || !articleDeleted) {
            return res.status(500).json({
                status:"error",
                mensaje: "Error al borrar"
            })
        };

        return res.status(200).json({
            status: "success",
            article: articleDeleted,
            mensaje: "Borrar"
        })
    })
}

module.exports = {
    category,
    article,
    create,
    save,
    edit,
    remove
}