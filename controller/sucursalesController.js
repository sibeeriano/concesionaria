const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')) //./ toma como referencia de una la carpeta raiz


const SucursalesController={
    Sucursales:(req,res)=>{      
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Bienvenido puede localizarnos en cuanlquiera de nuestras sucursales!")
        dbConce.forEach((sucu)=>{
            res.write(`\n\n`)
            res.write(`Sucursal:\n ${sucu.sucursal} \n`);
            res.write(`Dirección:\n ${sucu.direccion} \n`);
            res.write(`Telefono:\n ${sucu.telefono} \n\n`);                    
        })
         
        res.end("No dudes en consultarnos!")
},
sucursal:function(req, res){
    res.set({'content-type':'text/plain;charset=utf-8'})

    let parametroSucursal = req.params.sucursal;
    res.write('Estas viendo la sucursal de ' + parametroSucursal + '\n\n')
    dbConce.forEach((sucu)=>{
        if(sucu.sucursal == parametroSucursal){
            res.write('Sucursal: ' + sucu.sucursal + '\n')
            res.write('Direccion: ' + sucu.direccion + '\n')
            res.write('Telefono: ' + sucu.telefono + '\n\n')
            res.write('Estos son los autos de la sucursal de ' + parametroSucursal+":\n\n")
            res.write('Cantidad de autos: ' + sucu.autos.length+ '\n\n') 
            sucu.autos.forEach((datos)=>{
                res.write('--------------------------------------\n')
                res.write('MARCA: ' + datos.marca + '\n')
                res.write('MODELO: ' + datos.modelo + '\n')
                res.write('ANIO: ' + datos.anio + '\n')
                res.write('--------------------------------------\n')
                
            })
           res.end()
            
        }
        
        
    })

    res.end("no se encontro la zona")
    }

    
        
}

    module.exports = SucursalesController