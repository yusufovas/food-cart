const express = require("express")

const menu = require('../controllers/menu')
const orders = require('../controllers/orders')
const main = require('../controllers/main')
const food = require('../controllers/food')

const router = express.Router()

router
    .get('/', main.get)
    .get('/menu', menu.get)
    .post('/orders', orders.post)
    .get('/food', food.get)

module.exports = router