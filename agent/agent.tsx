
import axios, { AxiosResponse } from 'axios'
import { ICategoryModel } from './../Models/CategoryModel';


axios.defaults.baseURL = 'http:/192.168.1.30:5000/api'

axios.interceptors.request.use((res) => { 


    return res
},
    (error:any)=> {

    console.log(error) 
})


axios.interceptors.response.use((response:AxiosResponse) => { 
 
    return response    
},   
    (responseError:any)=> { 
    
    console.log(responseError)      
})


const Auth= {
    getAll:()=>axios.get('/'),
    login:()=>axios.get('/Auth/login')
}

const Category = {
    getCategories:()=>axios.get('/category/'),
    Add:(category:ICategoryModel)=>axios.post('/category/Add',category),
    Delete:(id:string)=>axios.get(`/category/delete/${id}`),
    Update:(category:ICategoryModel)=>axios.post('/category/Update',category)
}


const agent = {
    Auth,
    Category
}

export default agent