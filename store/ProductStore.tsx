import { makeAutoObservable,runInAction } from "mobx";
import { ICategoryModel } from "../Models/CategoryModel";
import { IProduct, Product } from "../Models/ProductModel";
import agent from './../agent/agent';


// products And Categories

export class ProductStore {
    selectedproduct:IProduct |  undefined
    products= Array<Product>()
    CartItems=Array<Product>()

    constructor() {
        makeAutoObservable(this)

    }

    getAllProducts=async()=>{
        runInAction(async()=>{
     
        })
        
    }

    addToCategory=(async(category:ICategoryModel)=>{
        runInAction(async()=>{
            let categories =   await agent.Category.Add(category)
        })
   
    })

    isFeturedProduct=()=>{
        runInAction(async()=>{

        })
    }
}