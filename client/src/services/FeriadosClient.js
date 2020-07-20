
import RestClient from "../common/RestClient"

const apiDomain = "http://localhost:3000"

class FeriadosClient{
    
    static async getFeriados(){

        let urlRequest = apiDomain  + "/feriados"

        let {feriados} = await RestClient.get(urlRequest)
        
        return feriados
    }

    static async actualizarFeriados(feriado){
        let id = feriado.id[0]

        let urlRequest = apiDomain  + "/feriados/" + id

        await RestClient.put(urlRequest,feriado)
        
        return feriado
    }

    static async borrarFeriado(id){
        let urlRequest = apiDomain  + "/feriados/" + id

        await RestClient.doDelete(urlRequest)
        
        return id
    }
    

}

export default FeriadosClient;
