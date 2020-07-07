const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded(
  { extended: true }
));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/userRegister", function(req, res){
    res.render("userRegister");
});

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

const userSchema = {
    name: String,
    password: String
};

const User = new mongoose.model("User", userSchema);


mongoose.connect("mongodb://localhost:27017/shopkeeperDB", {useNewUrlParser: true});


const shopkeeperSchema = {
    name: String,
    mobileNo: Number,
    password: String
};

const Shopkeeper = new mongoose.model("Shopkeeper", shopkeeperSchema);

app.get("/list", function(req, res){
    res.render("list");
});

app.post("/userRegister", function(req, res){
    const newUser = new User({
        name: req.body.username,
        password: req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("success");
        }
    });
});



app.get("/shopkeeperRegister", function(req, res){
    res.render("shopkeeperRegister");
});

app.post("/shopkeeperRegister", function(req, res){
    const newShopkeeper = new Shopkeeper({
        name: req.body.username,
        mobileNo: req.body.mobile-Node,
        password: req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("list");
        }
    });
});

app.get("/success", function(req, res){
    res.render("success");
});



app.get("/userLogin", function(req, res){
    res.render("userLogin");
});

app.get("/success1", function(req, res){
    res.render("success1");
});



app.post("/userLogin", function(req, res){
    const newUser = new User({
        name: req.body.username,
        password: req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("success1");
        }
    });
});

app.get("/shopkeeperLogin", function(req, res){
    res.render("shopkeeperLogin");
});

app.post("/shopkeeperLogin", function(req, res){
    const newShopkeeper = new Shopkeeper({
        
        mobileNo: req.body.mobile-Node,
        password: req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("list");
        }
    });
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});

