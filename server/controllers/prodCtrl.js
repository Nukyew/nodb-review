const products = require('../products.json')

module.exports = {
    getProducts: (req, res, next) => {
        res.status(200).send(products)
    }
}