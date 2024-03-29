import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    //validations
    //requiere email (@) y un patron de letras (.) letras
    //requiere una contraseña minimo 8 caracteres y un patron de una minuscula,una mayuscula, un numero y un caracter especial.
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email, Validators.pattern(/^.+@.+\..+$/)]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.http.get('http://localhost:8000/clientes').subscribe((res: any) => {
        const users = res.data[0];
        const userFound = users.filter((user: any) =>
          user.email === this.loginForm.value.email &&
          user.password === this.loginForm.value.password
        );
        if (userFound.length > 0) {
          
          // Aquí podrías redirigir a otra página después de un inicio de sesión exitoso
          this.router.navigate(['/home']);
        } else {
          alert('Email y/o password incorrecto.');
        }
      });
    }
    
    console.log(this.loginForm);
  }
}
