
const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))


const marcasController={  

    marcas:(req,res)=>{      
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Estas son las marcas con las cuales disponemos en estos momentos: \n\n" )
        let soloMarcas =[];
        dbConce.forEach((dato)=>{
            dato.autos.forEach((dato)=>{
                soloMarcas.push(dato.marca)
            })
        })
        let marca = soloMarcas.filter((dato, index) =>soloMarcas.indexOf(dato) === index)
        marca.forEach((dato)=>{
            res.write("-"+dato+"\n")

        })

       res.end()
    },  
    
    detalle:(req,res)=>{ 
        
        
        res.set({'content-type':'text/plain;charset=utf-8'})
        let parametroMarca = req.params.marcaAuto;
        let resultado = false;
        
        res.write(`
                            tuviste suerte?
                    Los resultados para ${parametroMarca} son:\n\n`);
        dbConce.forEach((dato)=>{
        dato.autos.forEach((dato)=>{
        if(dato.marca == parametroMarca){
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
            }
      }


module.exports = marcasController