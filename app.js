const express = require("express");
const path = require("path");
const fs = require("fs");
const Recipes = require("./Models/recipe")
const app = express();
const port = 3000;



app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", (req, res,)=>{
    res.redirect("/index");
})

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/index", (req, res)=>{
    res.render("index")
})

app.get("/recipe", (req, res)=>{
    res.render("recipe")
})

app.post("/recipe",async (req, res)=>{

   const { "search-Item": searchItem } = req.body;
//    console.log(searchItem);
    const recipes = await Recipes.find({
    })
    console.log(recipes);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});