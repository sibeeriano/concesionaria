const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')) //./ toma como referencia de una la carpeta raiz


const SucursalesController={
    Sucursales:(req,res)=>{      
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(` 
                                 _______________________________________________________________
                                |                                                               |                                                                                                             
                                |   **BIENVENIDO! PUEDE LOCALIZARNOS EN NUESTRAS SUCURSALES!!** |                                               
                                |_______________________________________________________________|                                                      
                                                                                            `)
        dbConce.forEach((sucu)=>{
            res.write(`\n\n
                                Sucursal: ${sucu.sucursal} \n
                                Dirección: ${sucu.direccion} \n
                                Telefono:  ${sucu.telefono} \n\n  `)            
        })
         
        res.end(`
        
                                /sucursales/ElNombreDeLaSucursal => te mostramos una sucursal en particular. Con mayuscula, acordate!! 
        `)
},
sucursal:function(req, res){
    res.set({'content-type':'text/plain;charset=utf-8'})

    let parametroSucursal = req.params.sucursal;
    
    dbConce.forEach((sucu)=>{
        if(sucu.sucursal == parametroSucursal){
            res.write(`
        Estas viendo la sucursal de ${parametroSucursal} \n
        Sucursal: ${sucu.sucursal} 
        Direccion: ${sucu.direccion}
        Telefono: ${sucu.telefono}
        Cantidad de autos: ${sucu.autos.length}  
        Estos son los autos de la sucursal de ${parametroSucursal}:\n\n`) 
            
            sucu.autos.forEach((datos)=>{
                res.write('                      MARCA: ' + datos.marca + '\n')
                res.write('                      MODELO: ' + datos.modelo + '\n')
                res.write('                      AÑO: ' + datos.anio + '\n')
                res.write('                      --------------------------------------\n')
                
            })
           res.end()
            
        }
        
        
    })

    res.end(`  
                      __________________________________________________________________________________________
                     |                                                                                          |                                                                                                             
                     | Seguimos creciendo para tenes una concesionaria cerca de tu zona!no se encontro la zona! |
                     |                       Por lo pronto no encontramos la zona                               |                                                                      
                     |__________________________________________________________________________________________|  
    
    `)
    }

    
        
}

    module.exports = SucursalesController 