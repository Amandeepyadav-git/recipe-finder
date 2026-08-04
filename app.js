const express = require("express");
const axios = require("axios");
const path = require("path");
const fs = require("fs");
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

app.get("/recipe", (req, res) => {
    res.render("recipe", {
        recipe: null
    });
});

app.post("/recipe",async (req, res)=>{
let search = req.body["search-Item"];
console.log(search);
try {
     const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

        const recipe = result.data.meals[0];

        res.render("recipe", { recipe });
} catch{
     res.render("error", { search } );
}
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});