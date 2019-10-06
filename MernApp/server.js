//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//DB Config
const db = require('./config/keys').mongoURI;
const opt = {
 useNewUrlParser: true,
 useUnifiedTopology: true,
}

//Connexion à la base de donnée
mongoose
 .connect(db, opt)
 .then(() => {
   console.log("MongoDB connected");
 })
 .catch((e) => {
   console.log("Error while DB connecting");
   console.log(e);
 });

//On définit notre objet express nommé app
const app = express();

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

//Définition des CORS
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//Définition du routeur
const router = express.Router();
app.use("/user", router);
require(__dirname + "/controllers/userController")(router);

//Définition et mise en place du port d'écoute
const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));
