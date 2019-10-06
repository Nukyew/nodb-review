const products = require('../products.json')
const bacon = require('../bacon.json')

module.exports = {
    getProducts: async (req, res, next) => {
        // res.status(200).send(products)
        const db = req.app.get('db')
        let result = await db.get_products(2)
        res.status(200).send(result[0])
    },
    getBacon: async (req, res, next) => {
        const db = req.app.get('db')
        let result = await db.get_products(1)
        res.status(200).send(result[0])
    }
}