import { Message } from "./message.interface";
import { User } from "./user.interface";

export interface Chat {
  _id: string,
  users: User[],
  messages: Message[]
}