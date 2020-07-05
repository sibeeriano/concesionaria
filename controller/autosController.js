const fs = require ('fs')
const marcasController = require('./marcasController');
const { domainToASCII } = require('url');
const { Z_FILTERED } = require('zlib');
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autosController = {
            autos:(req, res)=>{
                //res.write("Estos son todos nuestros autos disponibles: \n\n")
                res.set({'content-type':'text/plain;charset=utf-8'})
                res.write(` 
         _______________________________________________________________
        |                                                               |                                                                                                             
        |               **Estos son todos nuestros autos!               |
        |        Esperamos que encuentres un modelo que te guste!!**    |                                               
        |_______________________________________________________________|  \n\n  
              
    *ATAJO! /autos/MarcaElegida => Si te gusta una marca en especial podes filtrarla!*  
             
         

    -----------------------------------\n`);
                   
                dbConce.forEach((dato)=>{
                    dato.autos.forEach((dato)=>{
                                
                res.write(`
        Marca: ${dato.marca}
        Modelo: ${dato.modelo} 
        Telefono: ${dato.anio}
    -----------------------------------\n`)   
                                            
            
        })
    })
},
            marca:(req,res)=>{
                res.set({'content-type':'text/plain;charset=utf-8'})
                let parametroAuto = req.params.marca;
                let resultado = false;
        
                res.write(` 
         _______________________________________________________________
        |                                                               |                                                                                                             
                            **** tuviste suerte?***                   
        |                                                               |
                       Los resultados para ${parametroAuto} son:                                               
        |_______________________________________________________________|  
        
    ¡Atajo! autos/MarcaElegida/color => ¿Estará en el color que te gustaria? 
        (¿sabes que es red? si, hay que ingresar los colores en inglés! )
        
       ¡Atajo #2! /autos/MarcaElegida/año => ¿O en el año que queres?
                (Estos son numeros, no te preocupes del inglés!)
        \n\n`);
                dbConce.forEach((dato)=>{
                dato.autos.forEach((dato)=>{
                if(dato.marca == parametroAuto){
                        res.write("----------------------------------\n\n")
                   res.write('Marca: ' + dato.marca + '\n')
                  res.write('Modelo: ' + dato.modelo + '\n')
                   res.write('Telefono: ' + dato.anio + '\n\n')
                   res.write('Telefono: ' + dato.color + '\n\n')
            
                   resultado = true;
                      }              
                          })
                                 })
               if(resultado == false){
                res.write(` 
         _______________________________________________________________
        |                                                               |                                                                                                             
        |**Lo sentimos, no hubo suerte! Esa marca no esta disponible!!**|                                               
        |_______________________________________________________________|  
                                                                            \n\n`)
                  }
                 res.end()
                        },

            dato: function(req,res){
                res.set({'content-type':'text/plain;charset=utf-8'});
                let idMarca = req.params.marca;
                let idDato = req.params.dato;
                let luz = false;
                dbConce.forEach(function(sucursal){
                    sucursal.autos.forEach(function(auto){
                        if(auto.anio == idDato){
                            luz = true
                        }
                    })
                })
                dbConce.forEach(function(sucursal){
                    sucursal.autos.forEach(function(auto){
                        if(auto.color == idDato){
                            luz = true
                        }
                    })
                })
                if (luz == true) {
                    res.write(` 
         _______________________________________________________________
        |                       ¡TUVISTE SUERTE!                        |                                                                                                             
        |                                                               |
        |    **Estos son tus resultados para el auto de tus sueños**    |                                        
        |_______________________________________________________________|  
                                                                            \n\n`)
                    
                }
                luz == false;
            
                dbConce.forEach(function(sucursal){
                    let color = sucursal.autos.filter(function(auto){
                        return (auto.color == idDato || auto.anio == idDato) && auto.marca == idMarca
                    })
                    color.forEach(function(colorsito){
                       
                        res.write('|MARCA: '+ colorsito.marca+  ' \n')
                        res.write('|MODELO: '+ colorsito.modelo+' \n')
                        res.write('|AÑO: '+ colorsito.anio+     ' \n')
                        res.write('|COLOR: '+ colorsito.color+  ' \n')
                        res.write('--------------------------- \n')
                        luz == true;
                    })
                })
                if(luz == false){
                    res.write("\n\n\n")
                    res.write(` 
         _________________________________________________________________________
        |                                                                         |
        |  Acordate que los colores se ingresan en ingles, porque? no hay porqué. |                                                            |                                                                                                             
        |       Pero si ingresaste un año y estas leyendo este bello mensaje...   |                                          
        |                                                                         |
        |                  EL AUTO NO ESTA, EL AUTO NO ESTA                       |
        |_________________________________________________________________________|  
                                                                            \n\n`)               
                    

                }
            
                res.end();
            } 
            }   
    
                             

        


module.exports = autosController 