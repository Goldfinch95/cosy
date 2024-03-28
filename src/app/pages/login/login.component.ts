import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup
  submitted= false;
  send = false;
  constructor(private formBuilder:FormBuilder){
    //this.loginData = new Login();
  }
  //loginData: Login;

  ngOnInit(){
    //validations
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required,Validators.email,Validators.pattern(/^.+@.+\..+$/)]],
      'password': ['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return
    }
    alert('success')
    console.log(this.loginForm)
  }
}


