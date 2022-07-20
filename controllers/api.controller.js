exports.getToDo = function(req, res){
    console.log('about to route')
    res.render('./pages/index', {title: "Node | API", page: "Get Todo"})
}
