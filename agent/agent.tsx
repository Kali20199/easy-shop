import React from 'react'
import axios, { AxiosResponse } from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:5000/'

axios.interceptors.request.use((res) => { 


    return res
},
    (error:any)=> {

    console.log(error)
})


axios.interceptors.response.use((response) => { 


    return response
},
    (responseError:any)=> {

    console.log(responseError)
})


const Users= {
    getAll:()=>axios.get('/')
}


const agent = {
    Users,
}

export default agent