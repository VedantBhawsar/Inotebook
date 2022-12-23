const jwt = require("jsonwebtoken")
const JWT_TOKEN = "Babitaji"
const fetchuser = async (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Authenticate Using Valid Token" })
    }
    try {
        const data = jwt.verify(token, JWT_TOKEN)
        res.status(400).send({ error: "Incorrect Auth Token" })
        req.id = data.id
        next();
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" })
    }
}


module.exports = fetchuser