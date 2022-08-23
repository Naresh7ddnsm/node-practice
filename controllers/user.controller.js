const mongoose = require("mongoose");

const User = require("./../models/User.model");

const utils = require("./../utils/utils")

exports.login = async function(req, res){
    const {email, password} = req.body;

    if(!email || !password){
        res.redirect('/login')
        return
    }
    try{
        const user = await User.findOne({email, password});
        if(!user){
            console.warn('No user found')
        } else {
            let jwtSecretKey = process.env.JWT_SECRET;
            let data = {
                time: Date(),
                userId: user.username,
                email: user.email
            }
            const token = utils.genarateJWT(data, jwtSecretKey)
            res.cookie("token ", token, {
                httpOnly: false,
                secure: process.env.NODE_ENV === "production",
            }).redirect("/");
        }
    } catch (error){
        console.log(error)
    }
}
exports.logout = function(req, res){
    return res.clearCookie("token").status(200).redirect('/login')
}
exports.register = async function(req, res, next){

    const {username, password, email} = req.body;

    if(!username || !password || !email){
        res.redirect('/register');
    }
    let user = new User({username, password, email})
    
    user.save(function(err,result){
        if (err){
            console.log(err);
        } else{
          res.redirect("/")
        }
    })
}

