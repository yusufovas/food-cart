const jwt = require('jsonwebtoken')

module.exports = {
    sign: (payload) => {
        return jwt.sign(payload, 'secret_user_key')
    },
    verify: (token) => {
        return jwt.verify(token, 'secret_user_key')
    }
}