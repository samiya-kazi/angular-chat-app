import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/interfaces/chat.interface';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getUsers () : Observable<User[]> {
    return this.http.get<User[]>(this.rootUrl + '/user');
  }

  getChats (userId: string) : Observable<Chat[]> {
    return this.http.get<Chat[]>(this.rootUrl + '/user/chat/' + userId);
  }

  addChat (userId1: string, userId2: string) : Observable<Chat> {
    return this.http.post<Chat>(this.rootUrl + '/chat', {userId1, userId2});
  }

}
