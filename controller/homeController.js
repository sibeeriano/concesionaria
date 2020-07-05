const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8')) //./ toma como referencia de una la carpeta raiz


const homeController={
    index:(req,res)=>{      
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
         ______________________________________________________________________________________________________________________________________________
        |                                                                                                                                              |                                           
        |                             **BIENVENIDO! PARA MANEJARTE POR NUESTRO SITIO TENE EN CUENTA ESTOS ATAJOS!!**                                   |
        |                                                                                                                                              |               
        |         /sucursales => Para ver mas info sobre sucursales.                                                                                   |
        |         /sucursales/ElNombreDeLaSucursal => te mostramos una sucursal en particular. Con mayuscula, acordate!!                               |
        |                                                                                                                                              |
        |         /marcas => estas son todas las marcas que trabajamos por el momento.                                                                 |
        |         /marcas/LaMarcaDeTuInteres => ¿Buscas un modelo en particular? Desafia tu suerte!!                                                   |
        |                                                                                                                                              |
        |         /autos => ¿estas ansioso y queres ver TODOS los autos que tenemos?                                                                   |
        |         /autos/MarcaElegida => Si te gusta una marca en especial podes filtrarla!                                                            |
        |         /autos/MarcaElegida/color => ¿Estará en el color que te gustaria? (¿sabes que es red? si, hay que ingresar los colores en inglés! )  |
        |         /autos/MarcaElegida/año => ¿O en el año que queres?                                                                                  |
        |______________________________________________________________________________________________________________________________________________|
            
            `)
        res.write(`

                            *******PARA AHORRAR UN POCO DE TIEMPO DEJANOS MOSTRARTE NUESTRAS SUCURSALES*******`)
        dbConce.forEach((sucu)=>{
            res.write(`\n\n`)
            res.write(`
                                                         Sucursal:  
                                                                  ${sucu.sucursal} \n\n`);
            
            })
        res.end() 
    }
}

module.exports = homeController