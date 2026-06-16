
import  type { User } from "../types/types"
import { apiController } from "./Api"
class userService{

async create(data:Omit<User,"userId">):Promise<User>{
try {
    const res = await apiController.post<User>("/users/create",data)
return res
} catch (error) {
    throw error
}
}


async getAll():Promise<User[]>{

try {
const res = await apiController.get<User[]>("/users")
return res

} catch (error) {
    throw error
}

}


async delete(id:number):Promise<void>{
try {
    await apiController.delete<void>(`/users/delete/${id}`)

} catch (error) {
    throw error
}

}


async update(data:Partial<User>,id:number):Promise<void>{

    try {
        await apiController.put(`/users/update/${id}`,data)

    } catch (error) {
        throw error
    }
}

}


export const UserService = new userService()