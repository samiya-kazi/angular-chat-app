import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userChats! : Chat[];

  constructor() { }

  ngOnInit(): void {
  }

}
