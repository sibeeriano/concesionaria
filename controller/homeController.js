const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')) //./ toma como referencia de una la carpeta raiz


const homeController={
    index:(req,res)=>{      
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Bienvenido puede localizarnos en cuanlquiera de nuestras sucursales!")
        dbConce.forEach((sucu)=>{
            res.write(`\n\n`)
            res.write(`Sucursal:\n ${sucu.sucursal} \n\n`);
            })
        res.end()
    }
}

module.exports = homeController