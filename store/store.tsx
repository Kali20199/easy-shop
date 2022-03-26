import React, { createContext, useContext } from 'react'
import { ProductStore } from './ProductStore'
import UserStore from './userStore'

export const  store= ({

    userStore:new UserStore(),
    productStore:new ProductStore()


})


export const StoreContext = createContext(store)

export function useStore(){
    return useContext(StoreContext)
} 