const express = require("express")
const login = require("../controllers/login")


const auth_router = express.Router()


auth_router
    .post("/login", login.post)
    .get('/login', login.get)

module.exports = auth_router