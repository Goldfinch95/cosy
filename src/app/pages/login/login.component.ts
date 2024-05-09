import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { PerfilService } from '../../perfil.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    FontAwesomeModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  windowError = false;
  submitted = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showIcon = false;
  perfilData: any;
  error = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private perfilService: PerfilService, private router: Router) {}
 

  ngOnInit(): void {
    //validations
    //requiere email (@) y un patron de letras (.) letras
    //requiere una contraseña minimo 8 caracteres y un patron de una minuscula,una mayuscula, un numero y un caracter especial.
    this.loginForm = this.formBuilder.group({
      'mail': ['', [Validators.required,Validators.minLength(5),Validators.maxLength(256), Validators.email, Validators.pattern(/^.+@.+\..+$/)]],
      'password': ['', [Validators.required, Validators.minLength(8),Validators.maxLength(16), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]]
    });
  }

  //HACER POST

  async onSubmit(): Promise<void> {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.submitted) {
      try {
        const res: any = await this.http.post('http://localhost:13000/users/login', this.loginForm.value).toPromise();
        console.log(res);
        // Obtener el token
        const token = res.token;
        console.log(token);
        // Guardar en el local storage
        localStorage.setItem('token', res.token);
        // Ir al home
        this.router.navigateByUrl('/home');
      } catch (error: any) {
        
        this.error = true;
        this.windowError = true;
        console.log(this.windowError)
      }
    }
  }
  
  /*http://localhost:13000 */
  /*
   onSubmit() : void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.submitted) {
      try{
       this.http.post('172.21.0.1/users/login', this.loginForm.value).subscribe((res: any) => {
        console.log(res)
        //obtener el token
        const token = res.token
        console.log(token)
        //guardar en el local storage
        localStorage.setItem('token', res.token);
        //ir al home
        this.router.navigateByUrl('/home')
      })}
      catch(error){
        console.log(`error del tipo ${error}`)
      }
    }
  }*/

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showIcon = !this.showIcon;
  }
}
