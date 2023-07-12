import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponentComponent } from '../user-form-component/user-form-component.component';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})

export class UserListComponentComponent {

  constructor(private service: UserServiceService, private modalService: NgbModal) {}
  usuarios = this.service.users;

  openForm(){
    const modalForm = this.modalService.open(UserFormComponentComponent);
    modalForm.result.then(
      this.closeModal.bind(this),
      this.closeModal.bind(this)
    )
  }

  editUser(user: Users){
    const modalForm = this.modalService.open(UserFormComponentComponent);
    modalForm.result.then(
      this.closeModal.bind(this),
      this.closeModal.bind(this)
    )
    modalForm.componentInstance.Create = false;
    modalForm.componentInstance.userEdit = user;
  }

  deleteUser(user:Users){
    this.service.deleteUser(user)
  }

  closeModal(){}

}
