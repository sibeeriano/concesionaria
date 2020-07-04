const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autosController = {
            autos:(req, res)=>{
                res.write("Estos son todos nuestros autos disponibles: \n\n")
                dbConce.forEach((dato)=>{
                    dato.autos.forEach((dato)=>{
                                res.write("-----------------------------------\n\n")
                                res.write('Marca: ' + dato.marca + '\n')
                                res.write('Modelo: ' + dato.modelo + '\n')
                                res.write('Telefono: ' + dato.anio + '\n\n')   
                                            
            
        })
    })
}
}

module.exports = autosController