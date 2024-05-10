import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    FontAwesomeModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup
  //selectedFile: File | null = null;
  //selectedFileDataUrl: string | null = null;
  //defaultImageUrl: string = 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder-300x300.jpg'
  submitted= false;
  showPassword = false;
showSecondPassword = false;
showIcon = false;
showSecondIcon = false;
faEye = faEye;
faEyeSlash = faEyeSlash;

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router: Router){
    
  }
  

  ngOnInit(): void{
    //validations
    //requiere email (@) y un patron de letras (.) letras
    //requiere un nombre de entre 4 y 15 caracteres que sean alfabeticos.
    //requiere una contraseña minimo 8 caracteres y un patron de una minuscula,una mayuscula, un numero y un caracter especial.
    //validacion especial que sean iguales las contraseñas

    //img: 'image': this.selectedFileDataUrl,
    this.registerForm = this.formBuilder.group({
      'name': ['', [Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s']+$/)]],
      'lastName': ['', [Validators.required,Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s']+$/)]],
      'mail': ['', [Validators.required,Validators.minLength(5),Validators.maxLength(256),Validators.email,Validators.pattern(/^.+@.+\..+$/)]],
      'password': ['',[Validators.required,Validators.minLength(8),Validators.maxLength(16),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      'secondPassword': ['', [Validators.required]],
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
  //funcion que oculta la contraseñas
  togglePasswordVisibility(field: 'password' | 'secondPassword') {
    if (field === 'password') {
    this.showPassword = !this.showPassword;
    this.showIcon = !this.showIcon;
  } else if (field === 'secondPassword') {
    this.showSecondPassword = !this.showSecondPassword;
    this.showSecondIcon = !this.showSecondIcon;
  }
  }

  onSubmit(): void{
    
    this.submitted = true;
    if(this.registerForm.invalid){
      return
    }
    if(this.submitted){
      const {name,lastName,mail,password} = this.registerForm.value
        this.http.post('http://localhost:13000/users/register', {name,lastName,mail,password}).subscribe((res:any)=>{
          this.router.navigateByUrl('/success')
           })
      }
    }
  }
  

  


