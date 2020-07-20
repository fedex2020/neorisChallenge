const RestClient = require("../../common/RestClient")

class FeriadosClient{
    static async buscarFeriados(){
        let url = "http://nolaborables.com.ar/api/v2/feriados/2020?incluir=opcional"

        try{
            let feriados = await RestClient.get(url)
            
            return feriados

        }catch(err){

        }
        
    }
}

module.exports = FeriadosClient

