

import type { Product } from "../types/types"
import { apiController } from "./Api"
class productService{

async create(data:Product):Promise<Product>{

    try {
        const res = await apiController.post<Product>("/products/create",data)
        return res
    } catch (error) {
        throw error
    }

}


async getAll():Promise<Product[]>{
try {
    
    const res = await apiController.get<Product[]>("/products")
    return res
} catch (error) {
    throw error
}
}


async delete(id:number):Promise<void>{

try {
    
    await apiController.delete(`/products/delete/${id}`)
} catch (error) {
    throw error
}

}


async update(data:Partial<Product>, id:number):Promise<void>{

try {
    await apiController.put(`/products/update/${id}`,data)

} catch (error) {
    throw error
}

}


}


export const ProductService = new productService()