import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  selectedChat : Chat | undefined;
  otherUser : User | undefined;

  constructor(
    private chatService: ChatService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.chatService.getSelectedChat().subscribe(chat => {
      this.selectedChat = chat;
      const user = this.auth.getUser();
      this.otherUser = this.selectedChat.users.filter(u => u._id !== user._id)[0];
    })
  }

}
