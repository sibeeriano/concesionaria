
const fs = require ('fs')
dbConce = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))


const marcasController={  

    marcas:(req,res)=>{      
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Estas son las marcas con las cuales disponemos en estos momentos: \n" )
        let mar =[];
        dbConce.forEach(m=>{
            m.autos.forEach(m=>{
                mar.push(m.marca)
            })
        })
        mar = mar.filter((a, index) =>mar.indexOf(a) === index)
        mar.forEach(m=>{
            res.write("-"+m+"\n")

        })

       res.end()
    }  
          
    }


module.exports = marcasController