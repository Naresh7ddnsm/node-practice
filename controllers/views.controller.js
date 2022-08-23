exports.Home = function(req, res){
    res.render('./pages/index', {title: "Node | Home", page: "Home", user: req.userId})
}
exports.About = function(req, res){
    res.render('./pages/about', {title: "Node | About", page: "About", user: req.userId})
}
exports.Login = function(req, res){
    res.render('./pages/user/login', {title: "Node | User", page: "Login", user: req.userId})
}
exports.Register = function(req, res){
    res.render('./pages/user/register', {title: "Node | User", page: "Register", user: req.userId})
}