import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  // older methods
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // signals + newer methods
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
// select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

 
  onSelectUser() {
    this.select.emit(this.id);
  }
}
