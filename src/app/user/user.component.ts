import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-users'; // import dummy-users

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // we made a variable that gives a random number based on the amount of users in DUMMY_USERS

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// this is option 1 for updating state, this one relies on Zone.js & Angular's change detection mechanism => supported since Angular 2
// export class UserComponent {
//   selectedUser = DUMMY_USERS[randomIndex]; // we can access this property from inside the template of this component (so the user.component.html) => core Angular feature

//   get imagePath() { // this is a function inside a class that's usable like a property, so it doesn't need to be called and executed explicitely and it's meant to produce AND return a new value
//     return 'assets/users/' + this.selectedUser.avatar // the 'this.' is required in JS to access properties of a class, from inside the same class. 
//   }

//   onSelectUser() {
//     // console.log('Clicked!');
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // changes the randomIndex everytime the button is clicked
//     this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// }

// option 2 for updating state => using Signals to notify Angular about value changes & required UI updates => supported since Angular 16
// a Signal is an object that stores a value (any type of value, including nested objects)
export class UserComponent {
  selectedUser = signal (DUMMY_USERS[randomIndex]); // we can access this property from inside the template of this component (so the user.component.html) => core Angular feature
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() { // this is a function inside a class that's usable like a property, so it doesn't need to be called and executed explicitely and it's meant to produce AND return a new value
  //   return 'assets/users/' + this.selectedUser.avatar // the 'this.' is required in JS to access properties of a class, from inside the same class. 
  // }

  onSelectUser() {
    // console.log('Clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // changes the randomIndex everytime the button is clicked
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}