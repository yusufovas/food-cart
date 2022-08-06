const admin = require('../model/admin.json')
const jwt = require('../utils/jwt')
module.exports = {
    get: (req, res) => {
        res.render('login.ejs')
    },
    post: (req, res) => {
        const { name, password } = req.body

        if (name, password) {
            const user = admin.name == name && admin.password == password

            if (user) {
                res.cookie('token', jwt.sign({
                    user_id: user.id
                }))
                res.redirect('/dashboard')
            }
            else {
                res.redirect('/')
            }
        }
    }
}