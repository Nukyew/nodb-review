const products = require('../products.json')
const bacon = require('../bacon.json')

module.exports = {
    getProducts: async (req, res, next) => {
        // res.status(200).send(products)
        const db = req.app.get('db')
        let numItems = await db.get_num()
        let result = await db.get_products(2)
        let cartTotal = numItems[0].items_in_cart * result[0].price
        let toSend = {
            "id": "yearly-drop",
            "price": cartTotal,
            "url": "https://thecarddrop.com/api/products/yearly-drop"
        }
        res.status(200).send(toSend)
    },
    getBacon: async (req, res, next) => {
        const db = req.app.get('db')
        let numItems = await db.get_num()
        let result = await db.get_products(1)
        let cartTotal = numItems[0].items_in_cart * result[0].price
        let toSend = {
            "id": "2",
            "price": cartTotal,
            "url": "https://thecarddrop.com/api/products/bacon"
        }
        res.status(200).send(toSend)
    },
    saveNumOfItems: async (req, res, next) =>{
        const db = req.app.get('db')
        const {id} = req.params
        const {num} = req.body
        await db.update_items_in_cart([id, num])
        res.sendStatus(200)
    }
}