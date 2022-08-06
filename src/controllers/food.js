const food = require('../model/food.json')
const fs = require('fs')
const path = require('path')
module.exports = {

    get: (req, res) => {
        const category = req.cookies
        const res_id = req.cookies
        if (category) {
            if (category.category === 'milliy') {
                const newArr = food.filter(item => item.category == category.category && item.restaurant_id == res_id.res_id)

                res.render('food_list.ejs', { newArr })
            }

            if (category.category === 'fastfood') {
                const newArr = food.filter(item => item.category == category.category && item.restaurant_id == res_id.res_id)
                res.render('food_list.ejs', { newArr })
            }
        } else {
            res.json('category not found!')
        }
    },
    post: (req, res) => {
        const { name, price, restaurant_id, category, image } = req.body

        if(name, price, restaurant_id, category) {
            const new_food = {
                id: food.at(-1)?.id + 1 || 1,
                name,
                price,
                category,
                image,
                restaurant_id
            }
    
            food.push(new_food)
    
            fs.writeFileSync(path.join(process.cwd(), 'src','model', 'food.json'), JSON.stringify(food, null, 4))
    
            res.redirect('/dashboard')
        } else {
            res.json('cannot send free field!')
        }
    },
    delete_food: (req, res) => {
        const { res_id } = req.body

        const all_food = food.filter(item => item.name !== res_id)
        if (all_food) {
            fs.writeFileSync(path.join(process.cwd(), 'src','model', 'food.json'), JSON.stringify(all_food, null, 4))
            res.redirect('/dashboard')
        } else {
            res.redirect('/login')
        }
    }
}