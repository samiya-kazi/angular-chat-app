import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Chat } from 'src/app/interfaces/chat.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
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

  messageContent = new FormControl('');

  constructor(
    private chatService: ChatService,
    private auth: AuthService,
    private api: ApiClientService
  ) { }

  ngOnInit(): void {
    this.chatService.getSelectedChat().subscribe(chat => {
      this.selectedChat = chat;
      const user = this.auth.getUser();
      this.otherUser = this.selectedChat.users.filter(u => u._id !== user._id)[0];
    })
  }

  handleSend () {
    if (this.selectedChat && this.messageContent.value?.length) {
      const user = this.auth.getUser();
      this.api.addMessage(this.selectedChat?._id, this.messageContent.value, user).subscribe({
        next: updatedChat => {
          this.selectedChat = updatedChat;
          this.messageContent.reset();
        }
      })
    }
  }

}
