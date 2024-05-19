import { Component } from '@angular/core';

// esto para decirle a angular que es un componente
@Component({
  selector: 'miselector',
  template: '<h1>Hola Mundo</h1>',
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
