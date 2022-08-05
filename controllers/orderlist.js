const orders = require('../model/orders.json')
const restaurants  = require('../model/restaurants.json')
module.exports = {
    get: (req, res) => {
        res.render('order_list.ejs', { orders, restaurants })
    }
}