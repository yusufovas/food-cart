const orders = require('../model/orders.json')
const fs = require('fs')
const path = require('path')
const all_food = require('../model/food')
module.exports = {
    post: (req, res) => {
        const { name, contact, adress, food, count } = req.body

        const foundFood = all_food.find(item => item.name == food)

        
        if (name, contact, adress, food, count) {
            delete foundFood.id
            
            const new_order = {
                id: orders.at(-1)?.id + 1 || 1,
                name,
                contact,
                adress,
                food: [
                    {
                        food: foundFood.name,
                        res_id: foundFood.restaurant_id,
                        count
                    }
                ]
            }

            orders.push(new_order)

            fs.writeFileSync(path.join('.', 'model', 'orders.json'), JSON.stringify(orders, null, 4))
            res.redirect('/')
        } else  {
            res.json('cannot send free field!')
        }
    }
}