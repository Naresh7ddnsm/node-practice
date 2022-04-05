exports.home = function(req, res){
    res.render('./pages/index', {title: "Node | Home", page: "Home"})
}
exports.about = function(req, res){
    res.render('./pages/about', {title: "Node | About", page: "About"})
}