import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-new-contacts',
  templateUrl: './new-contacts.component.html',
  styleUrls: ['./new-contacts.component.css']
})
export class NewContactsComponent implements OnInit {

  @Input() users! : User[];

  constructor() { }

  ngOnInit(): void {
  }

}
