const jwt = require('../utils/jwt')

module.exports = (req, res, next) => {
    try {
        let { token } = req.cookies
        if(!token) { 
            throw new Error('token required!')
        }
        let verified = jwt.verify(token)

        let { user_id } = verified
        req.user_id = user_id
        
        return next()

    } catch (err) {
        return next(err)
    }
}