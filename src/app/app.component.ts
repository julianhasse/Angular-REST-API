import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rest-API App';
  name = 'by Julian Hasse';
  users: User[];

  constructor(private service: UserService) { }

  ngOnInit() {
    return this.service.getUsers().subscribe(data => { this.users = data; });
  }
}
