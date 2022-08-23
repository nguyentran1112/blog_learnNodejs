const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const path = require('path');
const app = express();
app.use(morgan("combined"));
app.engine("hbs", handlebars({
    extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'src/views'));
const port = 3000;
console.log('test',path.join(__dirname, 'src/views'))
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cat", (req, res) => {
  res.render('cat');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
