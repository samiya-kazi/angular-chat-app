import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Chat } from 'src/app/interfaces/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  newChat = new Subject<Chat>();
  selectedChat = new Subject<Chat>();
  updatedChat = new Subject<Chat>();

  getNewChat () {
    return this.newChat;
  }

  getSelectedChat () {
    return this.selectedChat;
  }

  getUpdatedChat () {
    return this.updatedChat;
  }

  setNewChat (chat: Chat) {
    this.newChat.next(chat);
  }

  setSelectedChat (chat: Chat) {
    this.selectedChat.next(chat);
  }

  setUpdatedChat (chat: Chat) {
    this.updatedChat.next(chat);
  }
}
