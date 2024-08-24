const express = require("express");

const staticRouter = express.Router();

staticRouter.get("/" ,(req,res) =>{
    return res.render('start');
})
staticRouter.get("/signup", (req, res) => {
    return res.render("signup");
});

staticRouter.get("/login", (req, res) => {
    return res.render("login");
});
// staticRouter.get("/logout" ,(req, res)=>{
    // return res.redirect("/");
// })

module.exports = staticRouter;
