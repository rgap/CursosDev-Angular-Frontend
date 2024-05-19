import { Component } from '@angular/core';

// esto para decirle a angular que es un componente
@Component({
  selector: 'miselector',
  // selector: '.miselector',
  // selector: '[miselector]',
  template: '<h1>Hola Mundo</h1>',
  standalone: true,
})
export class UsernameComponent {
  name = 'John';
  lastname = 'Doe';

  getFullName() {
    return this.name + ' ' + this.lastname;
  }

  toUpper(value: string) {
    return value.toUpperCase();
  }
}
