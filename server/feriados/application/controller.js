const feriadosDao = require("../infraestructura/FeriadosDao"),
      feriadosClient = require("../infraestructura/FeriadosClient")

const diccionarMes = {
    1:"enero",
    2:"febrero",
    3:"marzo",
    4:"abril",
    5:"mayo",
    6:"junio",
    7:"julio",
    8:"agosto",
    9:"septiembre",
    10:"octubre",
    11:"noviembre",
    12:"diciembre"
}

class FeriadosController{
    
    static async list(req,res,next){
        try{
            let feriados = await feriadosDao.list()
            
            res.send({ feriados });
        }catch(err){
            next(err)
        }
    }
    
    static async popular(req,res,next){
        try{
            await feriadosDao.deleteAll()

            let feriados = await feriadosClient.buscarFeriados()
            
            feriados = feriados.map( f => {
                f.nroMes = f.mes - 1
                f.mes = diccionarMes[f.mes]
                f.id = f.id+f.mes+f.dia
                
                return f
            })

            await feriadosDao.createMany(feriados)

            res.send({ ok : true });

        }catch(err){
            next(err)
        }
    }
    
    static async crear(req,res,next){
        try{

            await feriadosDao.create(req.body)
            res.send({ ok : true });

        }catch(err){
            next(err)
        }
    }
    
    static async put(req,res,next){
        let {id} = req.params

        try{    
            let feriado = await feriadosDao.get({id})
            
            Object.assign(feriado, req.body);

            await feriadosDao.put(feriado)

            res.send({ feriado });

        }catch(err){
            next(err)
        }
    }

    static async delete(req,res,next){
        let {id} = req.params

        try{    
            await feriadosDao.delete(id)

            res.send({ ok : true });

        }catch(err){
            next(err)
        }
    }
}

module.exports = FeriadosController

