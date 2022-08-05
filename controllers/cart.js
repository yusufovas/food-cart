module.exports = {
    post: (req, res) => {
        const { food_name } = req.cookies
    
        console.log(food_name);
        res.send("ok")
    }
}