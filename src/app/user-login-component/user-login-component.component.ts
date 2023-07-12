import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-login-component',
  templateUrl: './user-login-component.component.html',
  styleUrls: ['./user-login-component.component.css']
})
export class UserLoginComponentComponent {

  message: string = '';

  constructor(private formBuilder: FormBuilder, 
    public activeModal: NgbActiveModal,
    private service: UserServiceService){}

    get name(){
      return this.formUser.get('name');
    }

    get password(){
      return this.formUser.get('password');
    }

    formUser = this.formBuilder.group({
      'name': ["", Validators.required],
      'password': ["", Validators.required],
    });

    LoginUser(){
      if( this.formUser.invalid ) { return; }
      let name = this.formUser.value.name != undefined ? this.formUser.value.name : '';
      let pass = this.formUser.value.password != undefined ? parseInt(this.formUser.value.password) : 0;

      const result = this.service.login(name, pass);

      result == undefined ? this.message = 'Usuario no encontrado' : this.activeModal.dismiss(result);
    }
}
