import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';
import { Users } from './interfaces/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba_jorge_gil';
  dataUserLogin: Users = {
    name: '',
    mail: '',
    phone: 0,
    address: ''
  }

  constructor( private modalService: NgbModal){}

  openLogin(){
    const modalForm = this.modalService.open(UserLoginComponentComponent);
    modalForm.result.then(
      this.closeModal.bind(this),
      this.closeModal.bind(this)
    )
  }

  closeLogin(){
    this.dataUserLogin = {
      name: '',
      mail: '',
      phone: 0,
      address: ''
    }
  }

  closeModal(response:any){
    this.dataUserLogin = response;
  }
}
