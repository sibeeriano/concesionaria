const express = require('express');
const app = express();

const routeHome = require("./routes/home");
const routeSucursales = require("./routes/sucursales");
const routeMarca = require("./routes/marca")
/*const routeAutos = require("./routes/autos");
 ;*/

//servidor
app.listen(3030,() =>console.log("Concesionario abierto!"))

app.use('/', routeHome)  //request,response
app.use('/sucursales', routeSucursales)
app.use('/marcas', routeMarca)
/*app.use('/heroes', routeHeroes)//request, response*/

