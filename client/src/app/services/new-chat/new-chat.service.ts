import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Chat } from 'src/app/interfaces/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class NewChatService {

  constructor() { }

  newChat = new Subject<Chat>();

  getNewChat () {
    return this.newChat;
  }

  setNewChat (chat: Chat) {
    this.newChat.next(chat);
  }
}
