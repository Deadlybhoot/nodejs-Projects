const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//to mention use hbs instead of index.html
app.set('view engine', 'hbs');
//Due to views name change to templates
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(static_path);
//to call static page
app.use(express.static(static_path));


//Routing
// Benefit of this routing now tule locahost vr path /about.html chya jagi fakt /about write kel tri s
app.get("", (req,res) =>{
    res.render('index')
})

app.get("/about", (req,res) =>{
    res.render('about')
})


app.get("/weather", (req,res) =>{
    res.render('weather')
})


app.get("*", (req,res) =>{
    res.render('404page', {
        errorMsg : "Opps! page not found, Click Here to go back"
    })
})


app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})