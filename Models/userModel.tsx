export interface IuserModel {
name:string
email:string
token:string
isAdmin:boolean

}  
export class  userModel {
name= `` 
email= `` 
token= `` 
isAdmin=false

constructor(
name:  string,
email:  string,token:  string,isAdmin:  boolean,){this.name=name
this.email=email
this.token=token
this.isAdmin=isAdmin

}
}
 