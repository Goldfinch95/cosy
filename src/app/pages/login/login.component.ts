import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData: Login;

  constructor(){
    this.loginData = new Login();
  }

  getInto(){
    console.log(this.loginData)
  }

}

export class Login{
  email: string;
  password: string;
  constructor(){
    this.email = '';
    this.password = '';
  }
}