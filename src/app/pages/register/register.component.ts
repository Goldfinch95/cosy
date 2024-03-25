import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  accountData: User;

  constructor(){
    this.accountData = new User();
  }

  checkIn(){
    console.log(this.accountData)
  }
}

export class User{
  email: string;
  name: string;
  password: string;
  secondPassword: string;
  constructor(){
    this.email = '';
    this.name = '';
    this.password = '';
    this.secondPassword = '';
  }
}
