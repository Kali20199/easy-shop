export interface ICategory {
    name:string,
    icon:string,
    color:string

}



export class Category {
    name=''
    icon=''
    color=''


    constructor(  name:string,icon:string,color:string)
    {
        this.color = color,
        this.icon = icon
        this.name = name
    }

}