const express = require("express");
const resolve = require("path");
const path = require("path");
const app = express();
const mainRoutes = require("./routers/main")

app.use(express.static(path.join(__dirname, "./public")));
app.use(mainRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo, puerto 3000");
});
app.get("/",);
app.get("/",);