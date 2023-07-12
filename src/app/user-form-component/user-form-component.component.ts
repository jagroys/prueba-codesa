import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../services/user-service.service';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-user-form-component',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.css']
})
export class UserFormComponentComponent {

    Create: boolean = true;
    userEdit: Users = {
      name: '',
      mail: '',
      phone: 0,
      address: ''
    }

    constructor(private formBuilder: FormBuilder, 
      public activeModal: NgbActiveModal,
      private service: UserServiceService){}

    ngOnInit(){
      if(!this.Create){
        this.cargarUsuario(this.userEdit);
      }
    }

    cargarUsuario(user: any){
      this.formUser.patchValue(user);
    }

    get name(){
      return this.formUser.get('name');
    }

    get mail(){
      return this.formUser.get('mail');
    }

    get phone(){
      return this.formUser.get('phone');
    }

    get address(){
      return this.formUser.get('address');
    }

    formUser = this.formBuilder.group({
      'name': ["", Validators.required],
      'mail': ["", [Validators.required, Validators.email]],
      'phone': ["", Validators.required],
      'address': ["", Validators.required],
    });

    saveUser(){
      if( this.formUser.invalid ) { return; }

      let User: Users = {
        name: this.formUser.value.name != undefined ? this.formUser.value.name.toLowerCase() : '',
        mail: this.formUser.value.mail != undefined ? this.formUser.value.mail.toLowerCase() : '',
        phone: this.formUser.value.phone != undefined ? parseInt(this.formUser.value.phone) : 0,
        address: this.formUser.value.address != undefined ? this.formUser.value.address : '',
      }

      this.Create ? this.service.add(User) : this.service.edit(this.userEdit, User);

      this.activeModal.dismiss('Cross click')
    }
}
