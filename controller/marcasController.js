
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
    }  
          
    }


module.exports = marcasController