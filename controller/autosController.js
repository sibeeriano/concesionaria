const fs = require ('fs')
const marcasController = require('./marcasController');
const { domainToASCII } = require('url');
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autosController = {
            autos:(req, res)=>{
                //res.write("Estos son todos nuestros autos disponibles: \n\n")
                res.write(`
                            Estos son todos nuestros autos!
                    Esperamos que encuentres un modelo que te guste!:\n\n`);
                dbConce.forEach((dato)=>{
                    dato.autos.forEach((dato)=>{
                                res.write("-----------------------------------\n\n")
                                res.write('Marca: ' + dato.marca + '\n')
                                res.write('Modelo: ' + dato.modelo + '\n')
                                res.write('Telefono: ' + dato.anio + '\n\n')   
                                            
            
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

            dato:(req,res)=>{
                res.set({'content-type':'text/plain;charset=utf-8'});
                let resultado = false;
                let parametroColor = req.params.color;
                dbConce.forEach((dato)=>{
                    dato.autos.forEach((dato)=>{
                    if(dato.color == parametroColor){
                        res.write('Marca: ' + dato.marca + '\n')
                        res.write('Modelo: ' + dato.modelo + '\n')
                        res.write('Telefono: ' + dato.anio + '\n')
                        res.write('En tu color favorio!'+ dato.color + '\n\n')
                        resultado = true
                }
            })
        })
        if(resultado == false){
            res.write("--------------------------------------------------------------\n")
            res.write('|   Recuerda que los colores hay que ingresarlos en ingles!   |\n')
            res.write('|  si ingresaste el color en ese idioma lo sentimos, no esta  |\n')
            res.write('|      disponible en este momento en tu color favorito :(     |\n')
            res.write("--------------------------------------------------------------\n")
        }
                res.end()
                   
        }
        
                             

        
}

module.exports = autosController