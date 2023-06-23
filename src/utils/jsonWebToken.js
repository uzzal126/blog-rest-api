const jwt = require("jsonwebtoken")

const createJsonWebToken = (payload, jwtSecretKey, expireTime) => {
    return jwt.sign(payload, jwtSecretKey, {expiresIn: expireTime})
}

module.exports = createJsonWebToken