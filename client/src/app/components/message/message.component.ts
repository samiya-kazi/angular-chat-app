import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message! : Message;
  self : boolean = false;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    const user = this.auth.getUser();
    if (this.message.sender._id === user._id) this.self = true;
  }

}
