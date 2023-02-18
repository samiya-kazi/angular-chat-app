import { User } from "./user.interface";

export interface Message {
  _id?: string,
  content: string,
  sender: User
}