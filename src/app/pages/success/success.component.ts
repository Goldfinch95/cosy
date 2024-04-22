import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

 

 constructor(private router:Router){

 }
  ngOnInit() {
    // Ejemplo de setTimeout que se ejecuta después de 5 segundos
    setTimeout(() => {
      this.router.navigateByUrl('/login')
    }, 2500);
  }

}
