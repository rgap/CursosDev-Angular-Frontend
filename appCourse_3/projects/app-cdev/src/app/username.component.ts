import { Component } from '@angular/core';

// esto para decirle a angular que es un componente
@Component({
  selector: 'miselector',
  // styles: ['h1 {color: blue; font-size: 2em; font-family: Arial, sans-serif;}']]
  template: `<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Fullname</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>John Doe</td>
      </tr>
    </tbody>

    Hola Mundo
  </table>`,
  // styles: [
  //     'table { font-family: Arial;}',
  //     'table, th, td { border: 1px solid red; }'
  // ],
  styles: [
    `
      table {
        font-family: Arial;
      }
      table,
      th,
      td {
        border: 1px solid red;
      }
    `,
  ],
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
