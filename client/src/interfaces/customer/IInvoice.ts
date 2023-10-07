export interface IInvoice {
    id: number,
    csEmail: string,
    csName: string,
    csPhone: string,
    csAddress: string,
    district: string,
    status: string,
    price: number,
}

export interface IInvoiceHistory {
    id: number,
    status: string,
    user?: User,
    seller?: Seller
}

export interface User {
    id?: number,
    name?: string,
    address?: string,
    email?: string,
    gender?: string,
    phone?: string,
    image?: string,
}

export interface Seller {
    id: number,
    name: string,
    email: string,
    address: string,
    phone: string,
    district: string,
    gender: string,
    image?: string,
}