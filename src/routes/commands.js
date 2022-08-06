const express = require('express')


const dashboard = require("../controllers/dashboard")
const allFood = require('../model/food.json')
const orderlist = require("../controllers/orderlist")
const verify = require("../middlewares/verify")
const add_res = require('../controllers/add_res')
const food = require('../controllers/food')


const commands_router = express.Router()

commands_router
    .use(verify)
    .get('/dashboard', dashboard.get)
    .get('/newRes', add_res.get)
    .post('/newRes', add_res.post)
    .post('/addfood', food.post)
    .get('/addfood', (_, res) => {
        res.render('add_food.ejs', { allFood })
    })
    .get('/orderlist', orderlist.get)
    .delete('/deleteres', add_res.delete_res)
    .delete('/deletefood', food.delete_food)

module.exports = commands_router