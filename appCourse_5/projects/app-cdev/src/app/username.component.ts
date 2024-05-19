import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

// esto para decirle a angular que es un componente
@Component({
  selector: 'miselector',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
  // importar directiva estructural
  // imports: [CommonModule],
  // mas especifico NgForOf
  imports: [NgForOf],
  standalone: true,
})
export class UsernameComponent {
  name = 'John';
  lastname = 'Doe';
  date = new Date();

  paramName = '';
  paramLastname = '';

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

  // captureName(value: any) {
  //   // console.log(value);
  // }

  captureName(event: any) {
    this.paramName = event.target.value;
  }

  captureLastname(event: any) {
    this.paramLastname = event.target.value;
  }

  save() {
    console.log('Saving', this.paramName, this.paramLastname);
    this.users.push({ name: this.paramName, lastname: this.paramLastname });
    // esto no modifica el value en el html
    this.paramName = '';
    this.paramLastname = '';
  }
}
