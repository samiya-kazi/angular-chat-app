import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {

  @Input() chat! : Chat;
  otherUser! : User;
  user! : User;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.otherUser = this.chat.users.filter(user => user._id !== this.user._id)[0];
  }

}
