const productsModel = require("../models/products.model");


exports.getHome = (req, res, next) => {
    productsMode.getAllProducts()
    let category=req.query.category
    let validCategory =['cosmatics','medicines']
    let productsPromise
    if (category && validCategories.includes(category))
        productsPromise = productsModel.getProductsByCategory(category);
    else productsPromise = productsModel.getAllProducts();
    productsPromise
        .then(products => {
            res.render("index", {
                products: products,
                isUser: req.session.userId,
                isAdmin: req.session.isAdmin,
                validationError: req.flash("validationErrors")[0],
                pageTitle: "Home"
            });
        })
        .catch(err => {
            console.log(err);
        });
};