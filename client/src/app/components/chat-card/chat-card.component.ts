import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {

  @Input() chat! : Chat;
  otherUser! : User;
  user! : User;
  selected : boolean = false;

  constructor(
    private auth: AuthService,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.otherUser = this.chat.users.filter(user => user._id !== this.user._id)[0];

    this.chatService.getSelectedChat().subscribe(chat => {
      if (chat._id === this.chat._id) this.selected = true;
      else this.selected = false;
    })
  }

  handleSelect () {
    this.chatService.setSelectedChat(this.chat);
  }

}
