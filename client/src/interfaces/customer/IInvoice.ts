import { IMassage } from "../Massage";
import { IUser } from "../User";

export interface IInvoice {
  id: number;
  csEmail: string;
  csName: string;
  csPhone: string;
  csAddress: string;
  district: string;
  status: string;
  price: number;
}

export interface IInvoiceHistory {
  id: number;
  status: string;
  user?: IUser;
  seller?: IMassage;
}

// export interface IUser {
//   id?: number;
//   name?: string;
//   address?: string;
//   email?: string;
//   gender?: string;
//   phone?: string;
//   image?: string;
// }
