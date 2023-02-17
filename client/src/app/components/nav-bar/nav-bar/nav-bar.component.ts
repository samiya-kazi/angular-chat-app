import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() logout! : boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout () {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
