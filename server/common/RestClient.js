
const axios = require('axios')

const instance = axios.create();

const get = async (url , params = {}) => {
    console.log("GET " + url)
    
    try{
      let response = await instance.get( url , {
        ...params
      })
      
      return response.data                           
    }catch(err){
      console.error(err)
      throw err
    }
    
}
 
const RestClient = {
    get 
}

module.exports = RestClient
