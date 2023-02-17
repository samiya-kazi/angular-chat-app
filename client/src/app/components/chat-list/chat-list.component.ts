import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat.interface';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Input() userChats! : Chat[];

  constructor() { }

  ngOnInit(): void {
  }

}
