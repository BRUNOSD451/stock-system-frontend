
import { apiController } from "./Api"
import type { Supplier } from "../types/types"

export class supplierService{


    async create(data:Supplier):Promise<Supplier>{
try {
    const supplier = await apiController.post<Supplier>("/suppliers/create",data)
    return supplier
} catch (error) {
    throw error
}
    }


    async getAll():Promise<Supplier[]>{

        try {
            const suppliers = await apiController.get<Supplier[]>("/suppliers")
            return suppliers
        } catch (error) {
            throw error
        }
    }


    async delete(id:number):Promise<void>{
try {
    await apiController.delete(`/suppliers/delete/${id}`)
} catch (error) {
    throw error
}
    }


    async update(data:Partial<Supplier>,id:number):Promise<void>{

        try {
            apiController.put(`/suppliers/update/${id}`,data)

        } catch (error) {
            throw error
        }
    }
}



export const SupplierService = new supplierService()