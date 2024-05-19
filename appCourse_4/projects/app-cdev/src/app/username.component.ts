import { Component } from '@angular/core';

// esto para decirle a angular que es un componente
@Component({
  selector: 'miselector',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
  standalone: true,
})
export class UsernameComponent {
  name = 'John';
  lastname = 'Doe';
  date = new Date();

  users = [
    { name: 'John', lastname: 'Doe' },
    { name: 'John', lastname: 'Doe' },
  ];

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 200);

    this.users.forEach((user) => console.log(user));
    for (let user of this.users) {
      console.log(user);
    }
  }

  getFullName() {
    return this.name + ' ' + this.lastname;
  }

  toUpper(value: string) {
    return value.toUpperCase();
  }
}
