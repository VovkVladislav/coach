import { Component, OnInit } from '@angular/core';
import { UserRegistration } from './user-registration.component';
import { Registration } from 'src/app/services/registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  ngOnInit(): void {
  }

  messagePasswordMismatch = "Password don't match"

  user: UserRegistration = {
    email : '',
    username : '',
    password : ''
  }

  confPassword: String

  isPasswordMismatch = false

  func(user: UserRegistration, confPassword: String){
    if(user.password == confPassword){
        console.log(user)
        this.isPasswordMismatch = false;
    }else
        this.isPasswordMismatch = true;
  }


  constructor(private httpService: Registration){
  }


  sendUser(user : UserRegistration, confPassword: String){
    if(user.password == confPassword){
        console.log(user)
        this.isPasswordMismatch = false;
        this.httpService.regUser(user)
    }else
        this.isPasswordMismatch = true;
  }

}
