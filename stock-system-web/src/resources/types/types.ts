

export interface User {
    userId: number;
    userName: string;
    userCpf: string;
    userPosition: 'administrador' | 'supervisor' | 'funcionario';
    password: number | string;
}

export interface Category {
    categoryId: number; 
    categoryName: string;
}

export interface Product {
    productId: number;
    productName: string;
    productDescription: string | null;
    stockQuantity: number;
    categoryId: number | null;
}

export interface Supplier {
    supplierId: number;
    supplierName: string;
    supplierCnpj: string | null;
    supplierPhone: string | null;
}

export interface StockInput {
    stockInputId: number; 
    supplierId: number;
    inputDate: Date | string;
}

export interface InputItem {
    inputItemId: number;
    stockInputId: number; 
    productId: number;
    quantity: number;
}

export interface StockOutput {
    stockOutputId: number;
    outputDate: Date | string;
    outputObservation: string | null;
}

export interface OutputItem {
    outputItemId: number; 
    stockOutputId: number; 
    productId: number;
    quantity: number;
}


export interface InputItemDetalhado extends InputItem {
    product?: Product; 
}


export interface StockInputDetalhado extends StockInput {
    supplier?: Supplier;
    items: InputItemDetalhado[];
}


export interface OutputItemDetalhado extends OutputItem {
    product?: Product;
}


export interface StockOutputDetalhado extends StockOutput {
    items: OutputItemDetalhado[];
}


export interface ProductDetalhado extends Product {
    category?: Category;
}