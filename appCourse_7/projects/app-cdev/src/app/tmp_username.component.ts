export class UsernameComponent {
  name = 'John';
  lastname = 'Doe';

  getFullName() {
    return this.name + ' ' + this.lastname;
  }

  //   getFullName() {
  //     name = ""
  //     lastname = ""
  //     return name + ' ' + lastname;
  //   }

  toUpper(value: string) {
    return value.toUpperCase();
  }
}

const username = new UsernameComponent();
console.log(username.getFullName());
username.name = 'Jane';
username.lastname = 'Smith';
