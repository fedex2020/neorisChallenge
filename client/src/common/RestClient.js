
import axios from 'axios'

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

const doDelete = async (url ) => {
  console.log("DELETE " + url )
  
  try{
    let response = await instance.delete( url )
    
    return response.data                           
  }catch(err){
    console.error(err)
    throw err
  }
  
}

const put = async (url , data ) => {
  console.log("PUT " + url + "data: " + data)
  
  try{
    let response = await instance.put( url , data)
    
    return response.data                           
  }catch(err){
    console.error(err)
    throw err
  }
  
}


 
const RestClient = {
    get,put,doDelete
}

export default RestClient
