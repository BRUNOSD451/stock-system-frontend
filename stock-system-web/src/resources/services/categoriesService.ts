import type { Category } from "../types/types";
import { apiController } from "./Api";

class CategoryServiceClass {


  async create(data: Omit<Category, "categoryId">): Promise<Category> {
    try {
  
      const res = await apiController.post<Category>("/categories/create", data);
      return res; 
    } catch (error) {
    
      throw error; 
    }
  }


  async getAll(): Promise<Category[]> {
    try {
      const dataCategories = await apiController.get<Category[]>("/categories/");
      return dataCategories;
    } catch (error) {
     
      throw error;
    }
  }


  async delete(id: number): Promise<void> {
    try {
     
      await apiController.delete<void>(`/categories/delete/${id}`);
    } catch (error) {
  
      throw error;
    }
  }


  async update(id: number, data: Partial<Category>): Promise<Category> {
    try {
   
      const res = await apiController.put<Category>(`/categories/update/${id}`, data);
      return res;
    } catch (error) {
      
      throw error;
    }
  }
}


export const CategoryService = new CategoryServiceClass();