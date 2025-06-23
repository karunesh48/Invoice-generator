const express = require("express");
const app = express();
const path = require("path");
const data = require("./sample-invoice.json");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req, res){
    res.render('new',{data:data});

});
app.get("/download-pdf",function(req, res){
    res.render('index',{data:data});

});
app.listen(8000,()=>{console.log("Server has Started")});
