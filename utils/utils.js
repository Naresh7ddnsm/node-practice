const jwt = require('jsonwebtoken');

module.exports = {
    genarateJWT: function(data, secret) {
        return jwt.sign(data, secret);
    }
}