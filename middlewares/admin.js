const jwt = require('../utils/jwt')
const users = require('../model/users.json')
module.exports = async (req, res, next) => {
    try{
        let { token } = req.cookies

        if(!token) {    
            throw new Error('token required!')

        }
        let verified = jwt.verify(token)
        let { user_id } = verified

        const found_user = users.find(user => user.id == user_id)

        if(!found_user) {
            throw new Error('user not found!')
        }

        if(found_user.role !== 'admin') {
            return res.json({
                status: 400,
                data: [],
                message: "only admins have access!"
            })
        }

        req.user_id = user_id
        return next()
    } catch (err) {
        return next(err)
    }
}