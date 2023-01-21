const jwt = require("jsonwebtoken")
const JWT_TOKEN = "Babitaji"

//Function for Fetching User Informaton 
const fetchuser = async (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Authenticate Using Valid Token" })
    }
    try {
        const data = jwt.verify(token, JWT_TOKEN)
        req.id = data.id
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Internal Server Error" })
    }
}


module.exports = fetchuser