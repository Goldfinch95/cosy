import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, HttpClientModule],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.css',
})
export class RecoveryComponent implements OnInit {
  recoveryForm!:FormGroup;
  submitted= false;

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router: Router){
  }

  ngOnInit(): void{
    //validations
    //requiere email (@) y un patron de letras (.) letras
    this.recoveryForm = this.formBuilder.group({
      'email': ['', [Validators.required,Validators.email,Validators.pattern(/^.+@.+\..+$/)]],
    })
  }
  onSubmit(): void{
    this.submitted = true;
    if(this.recoveryForm.invalid){
      return
    }
    if (this.submitted) {
      this.http.get('http://localhost:8000/clientes').subscribe((res: any) => {
        const users = res.data[0];
        const userFound = users.filter((user: any) =>
          user.email === this.recoveryForm.value.email 
        );
        if (userFound.length > 0) {
          // Aquí podrías redirigir a otra página después de un inicio de sesión exitoso
          this.router.navigateByUrl('/login')
        } 
      });
    }
  }
}
