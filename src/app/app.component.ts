import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {

  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
  }
}
