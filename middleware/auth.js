const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
   
    let { token } = req.cookies;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        let data = jwt.verify(token, process.env.JWT_SECRET);
        console.log('loaded data', data)
        req.userId = data.userId;
        req.email = data.email;
        next();
    } catch {
        return res.sendStatus(403);
    }
}