const products = require('../products.json')
const bacon = require('../bacon.json')

module.exports = {
    getProducts: (req, res, next) => {
        res.status(200).send(products)
    },
    getBacon: (req, res, next) => {
        res.status(200).send(bacon)
    }
}