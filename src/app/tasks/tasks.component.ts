import { Component, EventEmitter, Output, Input } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

    name = DUMMY_USERS.find(user => user.id === selectedUserId)!


    }
