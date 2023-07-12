import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
    
    users: Array<Users> = [
      {
        name: 'pepito',
        mail: 'p@p.com',
        phone: 3202734,
        address: 'calle 74r #35-6'
      },
      {
        name: 'fulano',
        mail: 'fulano@fulano.com',
        phone: 5345435,
        address: 'calle 55R 45-4'
      },
      {
        name: 'pablito',
        mail: 'pablito@perez.com',
        phone: 65434545,
        address: 'calle 41K #33A'
      }
    ];

    add(user: Users) {
      this.users.push(user);
    }

    edit(userEdit:Users, NewUser: Users){
      const index = this.users.indexOf(userEdit);
      this.users.splice(index, 1, NewUser);
    }

    deleteUser(user: Users){
      const index = this.users.indexOf(user);
      this.users.splice(index, 1);
    }

    login(name:string, password:number){
      return this.users.find(user => user.name == name.toLowerCase() && user.phone == password);
    }
}
