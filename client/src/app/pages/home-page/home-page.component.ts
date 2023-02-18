import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/interfaces/chat.interface';
import { User } from 'src/app/interfaces/user.interface';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';
import { ChatSocketService } from 'src/app/services/chat-socket/chat-socket.service';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router,
    private api: ApiClientService,
    private chat: ChatService,
    private chatSocket: ChatSocketService
  ) { }

  user! : User;
  otherUsers : User[] = [];
  userChats : Chat[] = [];

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    } else this.router.navigate(['login']);

    this.getUsers()

    this.chat.getNewChat().subscribe(chat => {
      this.addNewChat(chat);
    })


    this.chatSocket.getMessages().subscribe({
      next: updatedChat => {
        console.log(updatedChat);
        this.userChats.forEach(chat => {
          if (chat._id === updatedChat._id) {
            chat = updatedChat;
            this.chat.setSelectedChat(chat);
          }
        })
      }
    })
  }

  getUsers () {
    this.api.getUsers().subscribe({
      next: users => {
        this.otherUsers = users.filter(user => user._id !== this.user._id);
        this.getUserChats();
      },
    })
  }

  getUserChats () {
    this.api.getChats(this.user._id).subscribe({
      next: chats => {
        this.userChats = chats;
        
        this.otherUsers = this.otherUsers.filter(user => {
          let flag = true;
          chats.forEach(chat => {
            const list = chat.users.filter(u => u._id === user._id);
            flag = list.length ? false : true;
          })

          return flag;
        })
      }
    })
  }


  addNewChat (chat: Chat) {
    this.userChats.push(chat);
    this.otherUsers = this.otherUsers.filter(user => {
      let flag = true;
      const list = chat.users.filter(u => u._id === user._id);
      flag = list.length ? false : true;
      return flag;
    })
  }

}
