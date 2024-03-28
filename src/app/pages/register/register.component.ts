import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  registerForm!:FormGroup
  submitted= false;
  
  constructor(private formBuilder:FormBuilder){
    
  }
  

  ngOnInit(){
    //validations
    //requiere email (@) y un patron de letras (.) letras
    //requiere un nombre de entre 4 y 15 caracteres que sean alfabeticos.
    //requiere una contraseña minimo 8 caracteres y un patron de una minuscula,una mayuscula, un numero y un caracter especial.
    //validacion especial que sean iguales las contraseñas
    this.registerForm = this.formBuilder.group({
      'email': ['', [Validators.required,Validators.email,Validators.pattern(/^.+@.+\..+$/)]],
      'fullName': ['', [Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s']+$/)]],
      'password': ['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      'secondPassword': ['', [Validators.required]]
    })
  }

  //funcion que comprueba si las contraseñas son iguales
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const secondPassword = form.get('secondPassword');
  
    if (password && secondPassword) { 
      if (password.value !== secondPassword.value) {
        secondPassword.setErrors({ mismatch: true });
      } else {
        secondPassword.setErrors(null);
      }
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }
    alert('success')
    console.log(this.registerForm)
  }
}
