import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-new-contact-card',
  templateUrl: './new-contact-card.component.html',
  styleUrls: ['./new-contact-card.component.css']
})
export class NewContactCardComponent implements OnInit {

  @Input() user! : User;

  constructor() { }

  ngOnInit(): void {
  }

}
