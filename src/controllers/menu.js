const restaurants = require('../model/restaurants.json')

module.exports = {
    get: (req, res) => {
        const category = req.cookies
        
        if(category) {
            if(category.category === 'milliy') {
                const newArr = restaurants.filter(f => f.category === 'milliy')
                res.render('menu.ejs', { newArr })
            }
        
            if(category.category === 'fastfood') {
                const newArr = restaurants.filter(f => f.category === 'fastfood')
                res.render('menu.ejs', { newArr })
            }
        }
        else {
            res.json('category not found!')
        }
    }
}