import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import { NgForm, FormGroupDirective } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  }

  info: User;

  constructor(private fireAuth: AngularFireAuth, private userService: UserService, private toastService: ToastrService) { }

  ngOnInit() {
    this.clearForm();
  }

  register(formDirective: NgForm) {

    formDirective.control.markAllAsTouched();
    var emailValid = (<HTMLInputElement>document.getElementById("email")).validity.valid;
    var passwordValid = (<HTMLInputElement>document.getElementById("password")).validity.valid;
    var firstnameValid = (<HTMLInputElement>document.getElementById("firstname")).validity.valid;
    var lastnameValid = (<HTMLInputElement>document.getElementById("lastname")).validity.valid;

    if(emailValid && passwordValid && firstnameValid && lastnameValid){
      {
        this.info = { email: this.user.email, firstname: this.user.firstname, lastname: this.user.lastname};
        this.fireAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(cred => {
          this.userService.createUser(cred.user.uid, this.info);
          this.toastService.success("Udana rejestracja");
          formDirective.resetForm();
          this.clearForm();}, err => this.toastService.error(err.message));
      }
    }
  }

  clearForm(userForm?:NgForm) {
    this.user = {
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    }
    if(userForm!=null)
      userForm.resetForm();
  }
}
