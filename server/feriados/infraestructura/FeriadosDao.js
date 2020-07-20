const FeriadoModel = require("./FeriadosSchema")

class FeriadosDao{
    static list(params = {}){
        return FeriadoModel.find(params)
    }
    
    static get(id){
        return FeriadoModel.findOne(id)
    }
    
    static create(feriado){
        let instance = new FeriadoModel()
       
        Object.assign(instance, feriado);

        return instance.save()
    }

    static createMany(feriados){
        return FeriadoModel.collection.insertMany(feriados)
    }

    static put(feriado){
        let instance = new FeriadoModel()
       
        Object.assign(instance, feriado);

        return instance.save()
    }

    static delete(id){
        return FeriadoModel.deleteOne({id})
    }

    static deleteAll(){
        return FeriadoModel.deleteMany({})
    }
}

module.exports = FeriadosDao

