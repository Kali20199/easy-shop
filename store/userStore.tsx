import { makeAutoObservable, reaction, runInAction } from 'mobx'
import { IuserModel, userModel } from '../Models/userModel'
import agent from './../agent/agent';



export class UserStore{
    user:IuserModel = new userModel("","","",false)
    
    constructor() {
        makeAutoObservable(this)

    }

 
    Login=async(email:string,passowrd:string)=>{
        runInAction(async()=>{
         let user  =  await agent.Auth.login().then(res=>{

         })
        })
        
    }
   
    register=async(user:userModel)=>{
        runInAction(async()=>{
            
        })
    }

}





export default UserStore