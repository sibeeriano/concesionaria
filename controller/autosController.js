const fs = require ('fs')
const marcasController = require('./marcasController');
const { domainToASCII } = require('url');
const { Z_FILTERED } = require('zlib');
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autosController = {
            autos:(req, res)=>{
                //res.write("Estos son todos nuestros autos disponibles: \n\n")
                res.write(`
                *****************************************************************
                            Estos son todos nuestros autos!
                    Esperamos que encuentres un modelo que te guste!
                *****************************************************************
                
-----------------------------------\n\n`);
                   
                dbConce.forEach((dato)=>{
                    dato.autos.forEach((dato)=>{
                                
                                res.write('Marca: ' + dato.marca + '\n')
                                res.write('Modelo: ' + dato.modelo + '\n')
                                res.write('Telefono: ' + dato.anio + '\n\n')
                                res.write("-----------------------------------\n\n")   
                                            
            
        })
    })
},
            marca:(req,res)=>{
                res.set({'content-type':'text/plain;charset=utf-8'})
                let parametroAuto = req.params.marca;
                let resultado = false;
        
                res.write(`
                            tuviste suerte?
                    Los resultados para ${parametroAuto} son:\n\n`);
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
                res.write("--------------------------------------------------------------\n")
                res.write('|Lo sentimos, no hubo suerte! No tenemos esa marca disponible!|\n')
                res.write("--------------------------------------------------------------\n")
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
                    res.write('********************************************* \n')
                    res.write('Estos son tus resultados para '+ idDato +':\n');
                    res.write('********************************************* \n')
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
                    res.write("                                             ---------------------------------------------------------------------\n")
                    res.write('                                            |Acordate que los colores se ingresan en ingles, porque? no hay porqué.|\n')
                    res.write('                                            |  Pero si ingresaste un año y estas leyendo este bello mensaje...     |\n')
                    res.write('                                            |                EL AUTO NO ESTA, EL AUTO NO ESTA                      |\n')
                    res.write("                                             ---------------------------------------------------------------------\n")

                }
            
                res.end();
            } 
            }   
    
                             

        


module.exports = autosController