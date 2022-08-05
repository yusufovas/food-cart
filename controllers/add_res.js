const restaurants = require('../model/restaurants.json')
const fs = require('fs')
const path = require('path')
module.exports = {
    get: (req, res) => {
        res.render('add_res.ejs', { restaurants })
    },
    post: (req, res) => {
        const { name, category, image } = req.body
    
        const foundRes = restaurants.find(r => r.name == name && r.category == category)
            if(!foundRes ) {
                const newRes = {
                    id: restaurants.at(-1)?.id + 1 || 1,
                    name,
                    category,
                    image
                }
                restaurants.push(newRes)
        
                fs.writeFileSync(path.join(process.cwd(), 'model', 'restaurants.json'), JSON.stringify(restaurants, null, 4))
                
                res.redirect('/dashboard')
            } else {
                res.json('already exists!')
            }
    },
    delete_res: (req, res) => {
        const { res_id } = req.body

        const all_res = restaurants.filter(item => item.name !== res_id)
        if(all_res) {
            fs.writeFileSync(path.join(process.cwd(), 'model', 'restaurants.json'), JSON.stringify(all_res, null, 4))
            res.redirect('/dashboard')
        } else {
            res.redirect('/login')
        }
    }
}