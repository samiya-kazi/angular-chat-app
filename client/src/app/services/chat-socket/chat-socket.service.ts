import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Chat } from 'src/app/interfaces/chat.interface';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatSocketService {

  constructor(private socket: Socket) { }

  joinChat (chatId: string) {
    this.socket.emit('join_room', chatId);
  }

  sendMessage (chatId: string, content: string, sender: User) {
    this.socket.emit('send_message', {chatId, content, sender});
  }

  getMessages () {
    return this.socket.fromEvent<Chat>('receive_message');
  }
}
