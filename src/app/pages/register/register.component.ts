import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup
  submitted= false;
  
  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router: Router){
    
  }
  

  ngOnInit(): void{
    //validations
    //requiere email (@) y un patron de letras (.) letras
    //requiere un nombre de entre 4 y 15 caracteres que sean alfabeticos.
    //requiere una contraseña minimo 8 caracteres y un patron de una minuscula,una mayuscula, un numero y un caracter especial.
    //validacion especial que sean iguales las contraseñas
    this.registerForm = this.formBuilder.group({
      'email': ['', [Validators.required,Validators.email,Validators.pattern(/^.+@.+\..+$/)]],
      'nombre': ['', [Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s']+$/)]],
      'password': ['',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      'secondPassword': ['', [Validators.required]],
      'apellido': ['-']
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

  onSubmit(): void{
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }

    if(this.submitted){
      this.http.get('http://localhost:8000/clientes').subscribe((res:any)=>{
        const users = res.data[0];
        const userFound = users.filter((user:any)=>
        user.email === this.registerForm.value.email 
        );
        if(userFound.length > 0){
          return alert('Este Usuario ya existe');
        }
        else {
          this.http.post('http://localhost:8000/clientes/', this.registerForm.value).subscribe((res:any)=>{
            if(!res.result){
              alert(res.message)
            }
          })
          this.router.navigateByUrl('/login')
        }
      })
    }
    
    console.log(this.registerForm)
  }
}
