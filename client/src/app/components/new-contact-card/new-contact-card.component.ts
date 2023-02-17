import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-new-contact-card',
  templateUrl: './new-contact-card.component.html',
  styleUrls: ['./new-contact-card.component.css']
})
export class NewContactCardComponent implements OnInit {

  @Input() user! : User;

  constructor(
    private auth: AuthService,
    private api: ApiClientService,
    private chat: ChatService
  ) { }

  ngOnInit(): void {
  }

  handleAddChat () {
    const self = this.auth.getUser();
    this.api.addChat(self._id, this.user._id).subscribe({
      next: newChat => {
        this.chat.setNewChat(newChat);
      }
    })
  }

}
